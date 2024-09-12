import { NextFunction, Request, Response } from "express";
import { userService } from "./user.service";

const userCreate = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const user = req.body
        const result = await userService.userCreateIntoDB(user)

        res.status(200).json({
            success: true,
            message: 'user create success!!',
            data: result
        })
    }catch(err){
        console.log(err)
        next(err)
    }
}





export const userController = {
    userCreate
}


