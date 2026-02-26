import mongoose from 'mongoose'

const coverLetterSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    title: {
        type: String,
        default: 'Untitled Cover Letter',
    },
    company: {
        type: String,
        default: '',
    },
    content: {
        type: String,
        default: '',
    },
    status: {
        type: String,
        enum: ['Draft', 'Completed'],
        default: 'Draft',
    },
}, { timestamps: true })

const CoverLetter = mongoose.model('CoverLetter', coverLetterSchema)
export default CoverLetter
