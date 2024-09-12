import express from 'express'
import { userloginController } from './user.controller'

const router = express.Router()


router.post('/login', userloginController.userLogin)



export const authenticationRoute = router