import express from 'express'
import { productController } from './product.controller'

const router = express.Router()


router.post('/add', productController.productAdd)
router.get('/all', productController.productGet)
router.delete('/delete/:id', productController.productDelete)
router.patch('/update/:id', productController.productUpdate)





export const productRoute = router