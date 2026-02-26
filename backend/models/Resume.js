import mongoose from 'mongoose'

const resumeSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    title: {
        type: String,
        default: 'Untitled Resume',
    },
    name: { type: String, default: '' },
    email: { type: String, default: '' },
    phone: { type: String, default: '' },
    location: { type: String, default: '' },
    linkedin: { type: String, default: '' },
    summary: { type: String, default: '' },
    experiences: [{
        jobTitle: String,
        company: String,
        location: String,
        dateRange: String,
        bullets: [String],
    }],
    education: [{
        school: String,
        degree: String,
        dateRange: String,
    }],
    skills: [String],
    atsScore: {
        type: Number,
        default: 0,
    },
    templateId: {
        type: String,
        default: 'classic',
    },
}, { timestamps: true })

const Resume = mongoose.model('Resume', resumeSchema)
export default Resume
