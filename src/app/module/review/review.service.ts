import { JwtPayload } from "jsonwebtoken";
import { TReview } from "./review.interface";
import { Review } from "./review.model";
import { User } from "../user/user.model";
import AppError from "../../error/apperror";


const createReviewIntoDB = async ( payload:TReview, jwtData: JwtPayload ) => {
    
    const user = await User.findOne({email: jwtData.email})
    if(!user){
        throw new AppError(400, 'you are not authorized user')
    }
 

    payload.userName= jwtData.name
    const result = await Review.create(payload)
    return result 
}


const getReviewFromDB = async (id:string) => {

    const result = await Review.find({productId: id})

    return result
} 


export const reviewService = {
    createReviewIntoDB,
    getReviewFromDB
}