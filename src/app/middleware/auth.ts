import { NextFunction, Request, Response } from "express";
import jwt, { JwtHeader, JwtPayload } from "jsonwebtoken";
import config from "../config";
import catchAsync from "./catchAsync";
import AppError from "../error/apperror";
import { TUserRole } from "./typeuserRole/typeuserRole";



// ...requistUserRole:TUserRole[]

const auth = (...requistUserRole:TUserRole[]) => {


    return catchAsync(async (req:Request, res:Response, next:NextFunction ) => {

        const token = req.headers.authorization
       

        if(!token) {
            throw new AppError(400, 'Authentication token is unvalid!!')
        }



       const decoded = jwt.verify(token, config.secret_token as string,)as JwtPayload
       console.log("Auth middleware decoded:", decoded)
       const { role } = decoded;

    
   
       if(requistUserRole && !requistUserRole.includes(role)) {
           console.log(role, "role pawa jay nai in auth middleware",)
        //    console.log({requistUserRole})
           throw new AppError(400, 'you are not authoried not provite valid role in middleware!!')
       }

       


       req.user = decoded as JwtHeader
       next()

          
    })
}



export default auth