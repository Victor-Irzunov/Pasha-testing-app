import { Router } from "express"
const router = new Router()
import { adminController } from '../controllers/adminController.js'
import checkRole from '../middleware/checkRoleMiddleware.js'


router.post('/', checkRole('ADMIN'), adminController.create)
router.get('/articles', adminController.getAll)
router.delete('/delete/:id', checkRole('ADMIN'), adminController.deleteOne)
router.get('/:id', adminController.getOne)
router.put('/', checkRole('ADMIN'), adminController.editOneArticle)


export default router