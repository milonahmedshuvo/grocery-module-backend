import AppError from "../../error/apperror"
import { User } from "../user/user.model"
import bcrypt from 'bcrypt'
import { TUserLogin } from "./user.interface"
import jwt from 'jsonwebtoken'
import config from "../../config"


const userLoginFromDB = async (payload:TUserLogin) => {

    const user = await User.findOne({email: payload.email})
    
    if(!user) {
        throw new AppError(404, 'user email not found!!')
    }


    const isPasswordValid = await bcrypt.compare(payload.password, user.password )

    if(!isPasswordValid) {
        throw new AppError(404, 'your password not match')
    }


    const userData = {
        name : user.name,
        email : user.email,
        role : user.role
    }


    const accessToken =  jwt.sign(userData, config.secret_token as string, {expiresIn: '30d'})
    

    return {
        accessToken
    }
}



export const userloginService = {
    userLoginFromDB
}