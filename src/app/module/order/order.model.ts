import { model, Schema } from "mongoose";
import { TOrder } from "./order.interface";

const orderSchema = new Schema<TOrder>({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    isDaleted: {
        type: Boolean,
        required: true
    },
    orderStatus: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }

})





// creating model 
export const Order = model<TOrder>('Order', orderSchema)