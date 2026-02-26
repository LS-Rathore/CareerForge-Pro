import { z } from 'zod'

export const resumeSchema = z.object({
    title: z.string().max(100).optional(),
    name: z.string().max(100).optional(),
    email: z.string().email().optional().or(z.literal('')),
    phone: z.string().max(20).optional(),
    location: z.string().max(100).optional(),
    linkedin: z.string().max(200).optional(),
    summary: z.string().max(2000).optional(),
    experiences: z.array(z.object({
        jobTitle: z.string().max(100),
        company: z.string().max(100),
        location: z.string().max(100).optional(),
        dateRange: z.string().max(50).optional(),
        bullets: z.array(z.string().max(500)).optional(),
    })).optional(),
    education: z.array(z.object({
        school: z.string().max(100),
        degree: z.string().max(100),
        dateRange: z.string().max(50).optional(),
    })).optional(),
    skills: z.array(z.string().max(50)).optional(),
    templateId: z.string().optional(),
})
