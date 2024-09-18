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





const orderAllGet = async (req: Request, res: Response, next: NextFunction) => {

    try {
       
        const result = await orderService.orderAllGetFromDB() 

        res.status(200).json({
            success: true,
            message: 'order get all success!!',
            data: result
        })
    }catch(err){
        // console.log(err)
        next(err)
    }
}


const orderStatusChange = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const {id} = req.params
        const result = await orderService.orderStatusChangeFromDB(id) 

        res.status(200).json({
            success: true,
            message: 'order is delivared success!!',
            data: result
        })
    }catch(err){
        // console.log(err)
        next(err)
    }
}



const myorder = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const user = req.user
        const result = await orderService.myorderFromDB(user)


        
        res.status(200).json({
            success: true,
            message: 'order is delivared success!!',
            data: result
        })
    }catch(err){
        // console.log(err)
        next(err)
    }
}






export const orderController = {
    orderCreate,
    orderAllGet,
    orderStatusChange,
    myorder
    
}