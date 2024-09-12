import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";
import bcrypt from 'bcrypt'
import config from "../../config";



const userSchema = new Schema <TUser> ({
     name: {
        type: String,
        required: true,
     },
     email: {
        type: String,
        required: true,
      //   unique: true
     },
     password: {
        type: String,
        required: true
     },
     role: {
        type: String,
        required: true
     }
})




userSchema.pre('save', async function (next) {
  
   this.password = await bcrypt.hash(this.password, Number(config.saltRounds) )
   
   next()
})







// creating model 
export const User = model<TUser>('User', userSchema)


