import express from 'express'
import { orderController } from './order.controller'
import auth from '../../middleware/auth'
import { userRole } from '../../middleware/typeuserRole/typeuserRole'

const router = express.Router()


router.post('/create', auth(userRole.admin, userRole.user), orderController.orderCreate)



export const orderRoute = router