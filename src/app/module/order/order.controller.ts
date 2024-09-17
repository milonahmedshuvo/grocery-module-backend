import { NextFunction, Request, Response } from "express"
import { orderService } from "./order.service"

const orderCreate = async (req: Request, res: Response, next: NextFunction) => {

    try {
        // const order = req.body    //postman
        const order = req.body.data //redux ui
       
        
        // jwt verify data 
        const decoded = req.user

        const result = await orderService.orderCreateIntoDB(order, decoded) 

        res.status(200).json({
            success: true,
            message: 'product add success!!',
            data: result
        })
    }catch(err){
        // console.log(err)
        next(err)
    }
}




export const orderController = {
    orderCreate
}