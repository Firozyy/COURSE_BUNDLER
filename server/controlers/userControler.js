import { catchasyncerrer } from "../midlewares/catchadyncErrer.js";
import { User } from '../model/User.js'
import { sentToken } from "../utils/sentToken.js";
import ErrorHandler from '../utils/errorHandler.js'



export const register = catchasyncerrer(async (req, res, next) => {



    const { name, email, password, role } = req.body

    let user = await User.findOne({ email });

    if (!name || !email || !password) {
        return next(new ErrorHandler("please add all fields", 400))
    };



    if (user) {
        return next(new ErrorHandler("user already registered", 409))
    };


    user = await User.create({
        name, email, password, role, avatar: {
            public_id: 'temp', url: 'temp'
        }
    });



    sentToken(res, "successfullyregistred", user, 201);
});
//login work
export const login = catchasyncerrer(async (req, res, next) => {



    const { email, password } = req.body

    let user = await User.findOne({ email }).select("+password");


    if (!email || !password) {
        return next(new ErrorHandler("please add all fields", 400))
    };



    if (!user) {
        return next(new ErrorHandler("Incorrecr Email or password", 409))
    };

    const ismatch = await user.comaparePassword(password);
    if (!ismatch) {
        return next(new ErrorHandler("Incorrecr Email or password", 409))
    };



    sentToken(res, `welcomeback${user.name}`, user, 201);
});
//logout work
export const logout = catchasyncerrer(async (req, res, next) => {

    res.status(200)
        .cookie("token", null, {
            expires: new Date(Date.now())
        })
        .json({
            success: true,
            message: 'logout success'
        });



});
//authentication
export const getmyprofile = catchasyncerrer(async (req, res, next) => {

const user = await User.findById(req.user._id)

res.status(200).json({   
    success:true,
    user,
})


});