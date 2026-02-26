import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'

const generateToken = (userId) => {
    return jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN || '7d',
    })
}

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body

        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists with this email.' })
        }

        const hashedPassword = await bcrypt.hash(password, 12)
        const user = await User.create({ name, email, password: hashedPassword })

        const token = generateToken(user._id)

        res.status(201).json({
            token,
            user: { id: user._id, name: user.name, email: user.email, plan: user.plan },
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body

        const user = await User.findOne({ email })
        if (!user) {
            return res.status(401).json({ error: 'Invalid email or password.' })
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid email or password.' })
        }

        const token = generateToken(user._id)

        res.json({
            token,
            user: { id: user._id, name: user.name, email: user.email, plan: user.plan },
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const getMe = async (req, res) => {
    try {
        const user = await User.findById(req.userId).select('-password')
        if (!user) {
            return res.status(404).json({ error: 'User not found.' })
        }
        res.json({ user })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
