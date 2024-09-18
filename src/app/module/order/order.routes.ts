import express from 'express'
import { orderController } from './order.controller'
import auth from '../../middleware/auth'
import { userRole } from '../../middleware/typeuserRole/typeuserRole'

const router = express.Router()


router.post('/create', auth(userRole.admin, userRole.user), orderController.orderCreate)
router.get('/all', orderController.orderAllGet)
router.get('/myorder',auth(userRole.user), orderController.myorder)
router.delete('/status/change/:id', orderController.orderStatusChange)


export const orderRoute = router