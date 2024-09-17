import express from 'express'
import { reviewController } from './review.controller'
import auth from '../../middleware/auth'
import { userRole } from '../../middleware/typeuserRole/typeuserRole'

const router = express.Router()


router.post('/create',auth(userRole.user, userRole.admin), reviewController.createReview )
router.get('/product/:id', reviewController.getReview)



export const reviewRoute = router