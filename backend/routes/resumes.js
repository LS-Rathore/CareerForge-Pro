import { Router } from 'express'
import { getResumes, getResume, createResume, updateResume, deleteResume, duplicateResume } from '../controllers/resumeController.js'
import { requireAuth } from '../middleware/auth.js'

const router = Router()

router.use(requireAuth)

router.get('/', getResumes)
router.get('/:id', getResume)
router.post('/', createResume)
router.put('/:id', updateResume)
router.delete('/:id', deleteResume)
router.post('/:id/duplicate', duplicateResume)

export default router
