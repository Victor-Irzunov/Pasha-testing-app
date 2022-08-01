import { Router } from "express"
const router = new Router()
import userRouter from "./userRouter.js"
import adminRouter from "./adminRouter.js"
import adminChangeRouter from "./adminChangeRouter.js"
import candidateRouter from './candidateRouter.js'
import contactRouter from './contactRouter.js'



router.use('/user', userRouter)
router.use('/admin', adminRouter)
router.use('/admin/change', adminChangeRouter)
router.use('/', candidateRouter)
router.use('/', contactRouter)



export default router