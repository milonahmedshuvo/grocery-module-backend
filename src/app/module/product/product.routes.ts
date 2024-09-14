import express from 'express'
import { productController } from './product.controller'

const router = express.Router()


router.post('/add', productController.productAdd)
router.get('/all', productController.productGet)



export const productRoute = router