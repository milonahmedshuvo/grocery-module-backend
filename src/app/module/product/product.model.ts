import { model, Schema } from "mongoose";
import { TProduct } from "./product.interface";

const productSchema = new Schema<TProduct> ({
    title: {
        type : String,
        required: true
    },
    description: {
        type : String,
        required: true
    },
    price: {
        type : Number,
        required: true
    },
    beforePrice: {
        type : Number,
        required: true
    },
    image: {
        type : String,
        required: true
    },
    isDaleted: {
        type: Boolean,
        default: false
    }
})




productSchema.pre('find', async function (next){
    this.find({isDaleted: false })
    next()
})



// creating model 

export const Product = model<TProduct>('Product', productSchema)