import { Router } from "express"
const router = new Router()
import { adminController } from '../controllers/adminController.js'
import checkRole from '../middleware/checkRoleMiddleware.js'


router.put('/order', checkRole('ADMIN'), adminController.change)


export default router