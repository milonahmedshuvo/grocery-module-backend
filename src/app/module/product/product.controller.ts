import { NextFunction, Request, Response } from "express"
import { productService } from "./product.service"

const productAdd = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const product = req.body.data
       

        const result = await productService.productAddIntoDB(product)

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


const productGet = async (req: Request, res: Response, next: NextFunction) => {

    try {
       
       

        const result = await productService.productGetFromDB()

        res.status(200).json({
            success: true,
            message: 'product salvation success!!',
            data: result
        })
    }catch(err){
        // console.log(err)
        next(err)
    }
}


export const productController = {
    productAdd,
    productGet
}
