import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'
import { userRoutes } from './app/module/user/user.routes'
import config from './app/config'
import { authenticationRoute } from './app/module/authentication/user.routes'
import { productRoute } from './app/module/product/product.routes'
import { orderRoute } from './app/module/order/order.routes'
import { reviewRoute } from './app/module/review/review.routes'
const app = express()



// middleware use 
app.use(cors())
app.use(express.json())


// application routes 
app.use("/api/v1/user", userRoutes)
app.use("/api/v1/user", authenticationRoute)
app.use("/api/v1/product",productRoute)
app.use("/api/v1/order",orderRoute)
app.use("/api/v1/review",reviewRoute)








app.get('/', (req, res) => {
  res.send('Grocery root route runing...')
})






// global error handlling middleware 

app.use((err:any, req: Request,res:Response, next:NextFunction ) => {




  res.status(500).json({
    success: "false & globar error",
    message: err?.message,
    stack: config.node_env === 'development' ? err?.stack : null

  })
})






// Not Found Page 

app.use((req:Request, res:Response, next:NextFunction) => {

  res.status(404).json({
    sccess: 'false',
    message: "Page not found",
    error: " "
  })
})








export default app