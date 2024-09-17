import { model, Schema } from "mongoose";
import { TOrder } from "./order.interface";

const orderSchema = new Schema<TOrder>({
    totalPrice: {
        type: Number,
        required: true
    },
    isDaleted: {
        type: Boolean,
        default: false
    },
    orderStatus: {
        type: String,
        default: "panding"
    },
    email: {
        type: String,
        required: true
    },
    items: {
        type : Number,
        required: true
    }

})







// creating model 
export const Order = model<TOrder>('Order', orderSchema )