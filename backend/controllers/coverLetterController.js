import CoverLetter from '../models/CoverLetter.js'

export const getCoverLetters = async (req, res) => {
    try {
        const letters = await CoverLetter.find({ userId: req.userId }).sort({ updatedAt: -1 })
        res.json({ coverLetters: letters })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const getCoverLetter = async (req, res) => {
    try {
        const letter = await CoverLetter.findOne({ _id: req.params.id, userId: req.userId })
        if (!letter) return res.status(404).json({ error: 'Cover letter not found.' })
        res.json({ coverLetter: letter })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const createCoverLetter = async (req, res) => {
    try {
        const letter = await CoverLetter.create({ userId: req.userId, ...req.body })
        res.status(201).json({ coverLetter: letter })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const updateCoverLetter = async (req, res) => {
    try {
        const letter = await CoverLetter.findOneAndUpdate(
            { _id: req.params.id, userId: req.userId },
            req.body,
            { new: true }
        )
        if (!letter) return res.status(404).json({ error: 'Cover letter not found.' })
        res.json({ coverLetter: letter })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const deleteCoverLetter = async (req, res) => {
    try {
        const letter = await CoverLetter.findOneAndDelete({ _id: req.params.id, userId: req.userId })
        if (!letter) return res.status(404).json({ error: 'Cover letter not found.' })
        res.json({ message: 'Cover letter deleted.' })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
