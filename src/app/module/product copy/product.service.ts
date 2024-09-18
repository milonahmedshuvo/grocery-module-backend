import { TProduct } from "./product.interface";
import { ProductOutlet } from "./product.model";

const productAddIntoDB = async (payload:TProduct) => {
    const product = await ProductOutlet.create(payload)
    return product
}



const productGetFromDB = async () => {
    const product = await ProductOutlet.find()
    return product
}

const productGetReverceFromDB = async () => {
    const product = (await ProductOutlet.find()).reverse()
    return product
}


const productGetSingleFromDB = async (id:string) => {
    const product = await ProductOutlet.findById(id)
    return product
}


const productDeleteFromDB = async (id:string) => {
    const product = await ProductOutlet.findByIdAndUpdate(id, {isDaleted: true})
    return product
}


const productUpdateFromDB = async (id:string, payload:TProduct) => {

    // console.log(' update service', id, payload)
    const product = await ProductOutlet.findByIdAndUpdate(id, payload )
    return product
}




export const productService = {
    productAddIntoDB,
    productGetFromDB,
    productGetReverceFromDB,
    productGetSingleFromDB,
    productDeleteFromDB,
    productUpdateFromDB 
}