import Stripe from 'stripe'
import User from '../models/User.js'

const getStripe = () => {
    if (!process.env.STRIPE_SECRET_KEY || process.env.STRIPE_SECRET_KEY === 'sk_test_your_stripe_secret_key') {
        throw new Error('Stripe secret key is not configured. Update STRIPE_SECRET_KEY in .env')
    }
    return new Stripe(process.env.STRIPE_SECRET_KEY)
}

export const createCheckoutSession = async (req, res) => {
    try {
        const stripe = getStripe()
        const { priceId } = req.body
        const user = await User.findById(req.userId)

        const session = await stripe.checkout.sessions.create({
            mode: 'subscription',
            payment_method_types: ['card'],
            customer_email: user.email,
            line_items: [{ price: priceId, quantity: 1 }],
            success_url: `${process.env.CLIENT_URL}/dashboard?payment=success`,
            cancel_url: `${process.env.CLIENT_URL}/dashboard?payment=cancelled`,
            metadata: { userId: req.userId },
        })

        res.json({ url: session.url })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const webhook = async (req, res) => {
    // Stripe webhook handler — implement with signing secret in production
    res.json({ received: true })
}
