import config from "../../config";
import { TUser } from "./user.interface";
import { User } from "./user.model";
import jwt from 'jsonwebtoken'

const userCreateIntoDB = async (payload:TUser) => {

    const result = await User.create(payload)

    console.log(result)
    const user = {
      name: result.name,
      email: result.email,
      role: result.role
    }


    const accessToken =  jwt.sign(user, config.secret_token as string, {expiresIn: '30d'}  )


    // console.log(result)
    return {
      result,
      accessToken
    }
}







export const userService = {
   userCreateIntoDB
 }


