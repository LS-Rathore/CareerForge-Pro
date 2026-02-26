import { Router } from 'express'
import { createCheckoutSession, webhook } from '../controllers/paymentController.js'
import { auth } from '../middleware/auth.js'

const router = Router()

router.post('/create-checkout-session', auth, createCheckoutSession)
router.post('/webhook', webhook)

export default router
