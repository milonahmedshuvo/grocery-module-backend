import { NextFunction, Request, Response } from "express";
import { reviewService } from "./review.service";

const createReview = async (req:Request, res:Response, next:NextFunction) => {

    try{
        const review = req.body
        const jwtData = req.user
        const result = await reviewService.createReviewIntoDB(review, jwtData)

        res.status(200).json({
            success: 'true',
            message: "Your review successful!!",
            data: result
        })
    }catch(err) {
        next(err)
    }
}




const getReview = async (req:Request, res:Response, next:NextFunction) => {

    try{
        const {id} = req.params
        const result = await reviewService.getReviewFromDB(id)

        res.status(200).json({
            success: 'true',
            message: "get review successful!!",
            data: result
        })
    }catch(err) {
        next(err)
    }
}



export const reviewController = {
    createReview,
    getReview
}