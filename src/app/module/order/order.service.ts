import { JwtPayload } from "jsonwebtoken"
import { Order } from "./order.model"
import { TOrder } from "./order.interface"

const orderCreateIntoDB = async (payload:TOrder, jwtData:JwtPayload ) => {

   
//    console.log('jwt data', jwtData)
   
//    const updatedPayload = payload.map(({ _id, ...item }) => {
//     return {
//        ...item,              // Spread other properties
//        orderId: _id,         // Rename _id to orderId
//        email,                // Add email from JWT
//        orderStatus: 'pending' // Add orderStatus field
//     };
//  });


    payload.email = jwtData.email
  

    const order = await Order.create(payload)
    return order
}



const orderAllGetFromDB = async () => {

    const result = await Order.find()
    return result
}


const orderStatusChangeFromDB = async (id:string) => {

    const result = await Order.findByIdAndUpdate(id, {orderStatus: 'Delivered'})
    return result
}


const myorderFromDB = async (jwtData: JwtPayload) => {
    
    console.log('my order', jwtData)
    const email = jwtData.email
    const result = await Order.find({email})
    return result
}




export const orderService = {
    orderCreateIntoDB,
    orderAllGetFromDB,
    orderStatusChangeFromDB,
    myorderFromDB
}

