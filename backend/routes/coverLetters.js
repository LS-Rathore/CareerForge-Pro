import { Router } from 'express'
import { getCoverLetters, getCoverLetter, createCoverLetter, updateCoverLetter, deleteCoverLetter } from '../controllers/coverLetterController.js'
import { auth } from '../middleware/auth.js'

const router = Router()

router.use(auth)

router.get('/', getCoverLetters)
router.get('/:id', getCoverLetter)
router.post('/', createCoverLetter)
router.put('/:id', updateCoverLetter)
router.delete('/:id', deleteCoverLetter)

export default router
