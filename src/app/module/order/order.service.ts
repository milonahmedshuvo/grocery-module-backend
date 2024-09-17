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



export const orderService = {
    orderCreateIntoDB
}

