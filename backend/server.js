import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import authRoutes from './routes/auth.js'
import resumeRoutes from './routes/resumes.js'
import coverLetterRoutes from './routes/coverLetters.js'
import paymentRoutes from './routes/payments.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// ─── Middleware ───
app.use(helmet())
app.use(cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    credentials: true,
}))
app.use(express.json({ limit: '10mb' }))

// ─── Connect to MongoDB ───
connectDB()

// ─── Routes ───
app.use('/api/auth', authRoutes)
app.use('/api/resumes', resumeRoutes)
app.use('/api/cover-letters', coverLetterRoutes)
app.use('/api/payments', paymentRoutes)

// ─── Health Check ───
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// ─── Error Handler ───
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(err.status || 500).json({
        error: err.message || 'Internal Server Error',
    })
})

app.listen(PORT, () => {
    console.log(`🚀 CareerForge API running on port ${PORT}`)
})

export default app
