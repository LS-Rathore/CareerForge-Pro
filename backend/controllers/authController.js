import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import prisma from '../config/prisma.js'

const generateToken = (userId) => {
    return jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN || '7d',
    })
}

// ─── POST /api/auth/signup ───
export const signup = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required.' })
        }

        if (password.length < 6) {
            return res.status(400).json({ error: 'Password must be at least 6 characters.' })
        }

        const existingUser = await prisma.user.findUnique({ where: { email } })
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists with this email.' })
        }

        const passwordHash = await bcrypt.hash(password, 12)

        const user = await prisma.user.create({
            data: { email, passwordHash },
            select: {
                id: true,
                email: true,
                role: true,
                createdAt: true,
                updatedAt: true,
            },
        })

        const token = generateToken(user.id)

        res.status(201).json({ token, user })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// ─── POST /api/auth/login ───
export const login = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required.' })
        }

        const user = await prisma.user.findUnique({ where: { email } })
        if (!user) {
            return res.status(401).json({ error: 'Invalid email or password.' })
        }

        const isMatch = await bcrypt.compare(password, user.passwordHash)
        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid email or password.' })
        }

        const token = generateToken(user.id)

        res.json({
            token,
            user: {
                id: user.id,
                email: user.email,
                role: user.role,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt,
            },
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// ─── GET /api/auth/me ───
export const getMe = async (req, res) => {
    try {
        res.json({ user: req.user })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
