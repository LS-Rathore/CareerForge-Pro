import { z } from 'zod'

export const coverLetterSchema = z.object({
    title: z.string().min(1, 'Title is required').max(100),
    company: z.string().max(100).optional(),
    content: z.string().max(5000).optional(),
    status: z.enum(['Draft', 'Completed']).optional(),
})
