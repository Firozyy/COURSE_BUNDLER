import jwt from "jsonwebtoken";
import ErrorHandler from "../utils/errorHandler.js";
import { catchasyncerrer } from "./catchadyncErrer.js";
import { User } from "../model/User.js";

export const isAuthanticate = catchasyncerrer(async (req, res, next) => {
 
    const {token}=req.cookies;

 if(!token){
    return next(new ErrorHandler('no toke/not logined',401)) 
 };

 const decoded = jwt.verify(token,process.env.secreKey);
console.log(decoded);
 req.user= await User.findById(decoded._id);
next();

});