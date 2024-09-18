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




const productGetReverce = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const result = await productService.productGetReverceFromDB()

        res.status(200).json({
            success: true,
            message: 'product salvation reverce success!!',
            data: result
        })
    }catch(err){
        // console.log(err)
        next(err)
    }
}








const productGetSingle = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const {id} = req.params
        const result = await productService.productGetSingleFromDB(id)

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




const productDelete = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const {id} = req.params
   
        const result = await productService.productDeleteFromDB(id)

        res.status(200).json({
            success: true,
            message: 'product delete success!!',
            data: result
        })
    }catch(err){
        // console.log(err)
        next(err)
    }
}




const productUpdate = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const {id} = req.params
        const product = req.body
        // console.log('product', product)
        // console.log('id', id)




        const result = await productService.productUpdateFromDB(id, product)

        res.status(200).json({
            success: true,
            message: 'product update success!!',
            data: result
        })
    }catch(err){
        // console.log(err)
        next(err)
    }
}





export const productController = {
    productAdd,
    productGet,
    productGetReverce,
    productGetSingle,
    productDelete,
    productUpdate
}
