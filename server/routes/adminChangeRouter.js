import { Router } from "express"
const router = new Router()
import { adminChangeController } from '../controllers/adminChangeController.js'
import checkRole from '../middleware/checkRoleMiddleware.js'


router.get('/order', checkRole('ADMIN'), adminChangeController.editOrder)


export default router