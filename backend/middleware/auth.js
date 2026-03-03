import jwt from 'jsonwebtoken'
import prisma from '../config/prisma.js'

// ─── Verify JWT and attach user to request ───
export const requireAuth = async (req, res, next) => {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '')

        if (!token) {
            return res.status(401).json({ error: 'Access denied. No token provided.' })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        const user = await prisma.user.findUnique({
            where: { id: decoded.userId },
            select: {
                id: true,
                email: true,
                role: true,
                stripeCustomerId: true,
                stripeSubscriptionId: true,
                createdAt: true,
                updatedAt: true,
            },
        })

        if (!user) {
            return res.status(401).json({ error: 'User not found.' })
        }

        req.user = user
        next()
    } catch (error) {
        res.status(401).json({ error: 'Invalid or expired token.' })
    }
}

// ─── Require PRO or ADMIN role ───
export const requirePro = (req, res, next) => {
    if (!req.user) {
        return res.status(401).json({ error: 'Authentication required.' })
    }

    if (req.user.role !== 'PRO' && req.user.role !== 'ADMIN') {
        return res.status(403).json({ error: 'This feature requires a Pro subscription.' })
    }

    next()
}
