import { NextFunction, Request, Response } from "express";
import { userloginService } from "./user.service";

const userLogin = async (req:Request, res:Response, next: NextFunction) => {

    try{
        // const loginData = req.body  // postman
        const loginData = req.body.data  
     
        const result = await userloginService.userLoginFromDB(loginData)

        res.status(200).json({
            success : 'true',
            message : "Login success!!",
            data : result 
        })
    }catch(err){
        next(err)
    }
}



export const userloginController = {
    userLogin
}

