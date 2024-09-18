import { NextFunction, Request, Response } from "express";
import { userService } from "./user.service";

const userCreate = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const user = req.body.data //redux use
        // const user = req.body  //postman 
       

        const result = await userService.userCreateIntoDB(user)

        res.status(200).json({
            success: true,
            message: 'user create success!!',
            data: result
        })
    }catch(err){
        // console.log(err)
        next(err)
    }
}




const currentUser = async (req: Request, res: Response, next: NextFunction) => {

    try {
       
        const user = req.user
       

        console.log('usssssssssssss' , user)

        const result = await userService.currentUserFromDB(user)

        res.status(200).json({
            success: true,
            message: 'user create success!!',
            data: result
        })
    }catch(err){
        // console.log(err)
        next(err)
    }
}





export const userController = {
    userCreate,
    currentUser
}


