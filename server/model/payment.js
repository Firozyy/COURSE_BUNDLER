import mongoose from 'mongoose'

const schema = new mongoose.Schema({

    razorpay_signature:{
        type:String,
        required:true
    }, 
    razarpay_paymentID:{
        type:String,
        required:true
    }, 
    razarpay_subscription_id:{
        type:String,
        required:true
    },

    createdAT: {
        type: Date,
        default: Date.now
    },
});


export const Payment = mongoose.model("Payment", schema)