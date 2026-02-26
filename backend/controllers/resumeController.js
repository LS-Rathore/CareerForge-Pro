import Resume from '../models/Resume.js'

export const getResumes = async (req, res) => {
    try {
        const resumes = await Resume.find({ userId: req.userId }).sort({ updatedAt: -1 })
        res.json({ resumes })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const getResume = async (req, res) => {
    try {
        const resume = await Resume.findOne({ _id: req.params.id, userId: req.userId })
        if (!resume) return res.status(404).json({ error: 'Resume not found.' })
        res.json({ resume })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const createResume = async (req, res) => {
    try {
        const resume = await Resume.create({ userId: req.userId, ...req.body })
        res.status(201).json({ resume })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const updateResume = async (req, res) => {
    try {
        const resume = await Resume.findOneAndUpdate(
            { _id: req.params.id, userId: req.userId },
            req.body,
            { new: true }
        )
        if (!resume) return res.status(404).json({ error: 'Resume not found.' })
        res.json({ resume })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const deleteResume = async (req, res) => {
    try {
        const resume = await Resume.findOneAndDelete({ _id: req.params.id, userId: req.userId })
        if (!resume) return res.status(404).json({ error: 'Resume not found.' })
        res.json({ message: 'Resume deleted.' })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const duplicateResume = async (req, res) => {
    try {
        const original = await Resume.findOne({ _id: req.params.id, userId: req.userId })
        if (!original) return res.status(404).json({ error: 'Resume not found.' })

        const copy = original.toObject()
        delete copy._id
        copy.title = `${copy.title} (Copy)`

        const resume = await Resume.create(copy)
        res.status(201).json({ resume })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
