import { model, Schema } from "mongoose";
import { TReview } from "./review.interface";

const reviewSchema = new Schema<TReview>({
    comment: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    productId: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    }
})




// creating model 
export const Review = model<TReview>('Reviews', reviewSchema)