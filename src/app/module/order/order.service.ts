import { JwtPayload } from "jsonwebtoken"
import { TOrder } from "./order.interface"
import { Order } from "./order.model"

const orderCreateIntoDB = async (payload:TOrder, jwtData:JwtPayload ) => {

   // console.log(payload)
   console.log('jwt data', jwtData)

   payload.email = jwtData.email

    const order = await Order.create(payload)
    return order
}



export const orderService = {
    orderCreateIntoDB
}

