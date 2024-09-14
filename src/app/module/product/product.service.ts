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




export const productService = {
    productAddIntoDB,
    productGetFromDB
}