import { Router } from 'express'
import { createCheckoutSession, webhook } from '../controllers/paymentController.js'
import { requireAuth } from '../middleware/auth.js'

const router = Router()

router.post('/create-checkout-session', requireAuth, createCheckoutSession)
router.post('/webhook', webhook)

export default router
