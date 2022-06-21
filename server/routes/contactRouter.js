import { Router } from "express"
const router = new Router()
import { contactController } from "../controllers/contactController.js"
import authMiddleware from "../middleware/authMiddleware.js"



router.post('/contact', contactController.message)
router.get('/contact', authMiddleware, contactController.getAll)

router.post('/new-iscontact', contactController.newContact)
router.delete('/delete-iscontact', contactController.delContact)
router.get('/get-iscontact', contactController.getContact)

export default router