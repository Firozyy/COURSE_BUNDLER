import { catchasyncerrer } from "../midlewares/catchadyncErrer.js";
import { User } from "../model/User.js";
import { Payment } from "../model/payment.js";
import { instance } from "../server.js";
import ErrorHandler from "../utils/errorHandler.js";
import crypto from 'crypto'

export const buySubsriptiion = catchasyncerrer(async (req, res, next) => {


    const user = await User.findById(req.user._id);



    if (user.role === "admin") return next(new ErrorHandler('admin cant buy subscription', 400));


    const plan_id = process.env.razorpay_planId || plan_La0tb4wIBPs7nO;

    const subscription = await instance.subscriptions.create({
        plan_id,
        customer_notify: 1,

        total_count: 12,


    })


    user.subscription.id = subscription.id;
    user.subscription.status = subscription.status;


    await user.save();

    res.status(200).json({
        status: true,
        message: 'payment success',
        subscriptionID: subscription.id,
    })
});


//payment verification
export const paymentVerification = catchasyncerrer(async (req, res, next) => {

    const { razorpay_signature, razarpay_paymentID, razarpay_subscription_id } = req.body;
    const user = await User.findById(req.user._id);



    const subscriptionId = user.subscription._id
    const genratedSignature = crypto.createHmac("sha256", process.env.API_Secret).update(razarpay_paymentID + "|" + subscriptionId, 'utf8').digest('hex');
    const authenticated = genratedSignature === razorpay_signature

    if (!authenticated)
        return res.redirect(`${process.env.frontend_url}/paymentfailed`)
    //database comes here
    await Payment.create({
        razorpay_signature, razarpay_paymentID, razarpay_subscription_id
    });


    user.subscription.status = 'active';
    await user.save();
    res.redirect(`${process.env.frontend_url}/paymentsuccess?refrence=${razarpay_paymentID}`)
});


//getrazarPayKEy
export const getrazarPayKEy = catchasyncerrer(async (req, res, next) => {


    res.status(200).json({
        success: true,
        key: process.env.razorpay_APIkey
    })
});


export const cancelSubscription = catchasyncerrer(async (req, res, next) => {

    const user = await User.findById(req.user._id);

    const subscriptionID = user.subscription.id;

    let refund = false;
 
   instance.subscriptions.cancel(subscriptionID);
   
    const payment = await Payment.findOne({

        razarpay_subscription_id: subscriptionID
    });


    const gap = Date.now() - Payment.createdAt;


    const refundTime = process.env.REFUND_DAYS * 24 * 60 * 60 * 1000;


    if (refundTime > gap) {
        await instance.payments.refund(payment.razarpay_paymentID);
        refund = true;
    }

    await payment.deleteOne({});
    user.subscription.id = undefined
    user.subscription.status = undefined

 
    await user.save();

    res.status(200).json({
        success: true,
        message:
            refund ? "subscription canceled you wll recive full payment within 7 days"
                : "subscription canceled Now refund initiated as subscription wes canceled will after 7 days"
    })
});