import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const productAddIntoDB = async (payload:TProduct) => {
    const product = await Product.create(payload)
    return product
}



const productGetFromDB = async () => {
    const product = await Product.find()
    return product
}


const productGetSingleFromDB = async (id:string) => {
    const product = await Product.findById(id)
    return product
}


const productDeleteFromDB = async (id:string) => {
    const product = await Product.findByIdAndUpdate(id, {isDaleted: true})
    return product
}


const productUpdateFromDB = async (id:string, payload:TProduct) => {

    // console.log(' update service', id, payload)
    const product = await Product.findByIdAndUpdate(id, payload )
    return product
}




export const productService = {
    productAddIntoDB,
    productGetFromDB,
    productGetSingleFromDB,
    productDeleteFromDB,
    productUpdateFromDB 
}