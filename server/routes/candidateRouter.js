import { Router } from "express"
const router = new Router()
import { candidateController } from "../controllers/candidateController.js"
import authMiddleware from "../middleware/authMiddleware.js"



router.post('/candidate', candidateController.message)
router.get('/candidate', authMiddleware, candidateController.getAll)


router.post('/new-iscandidat',candidateController.newCandidat )
router.delete('/delete-iscandidat',candidateController.delCandidat )
router.get('/get-iscandidat', candidateController.getCandidat)

export default router