import { catchasyncerrer } from "../midlewares/catchadyncErrer.js";
import { User } from '../model/User.js'
import { sentToken } from "../utils/sentToken.js";
import ErrorHandler from '../utils/errorHandler.js'
import { sentEmail } from "../utils/sentemail.js";
import crypto from 'crypto'
import { Course } from "../model/Course.js";
import cloudinary from 'cloudinary'
import getDataUri from "../utils/dataUri.js";


export const register = catchasyncerrer(async (req, res, next) => {


    const { name, email, password, role } = req.body
    const file = req.file;
    let user = await User.findOne({ email });

    if (!name || !email || !password || !file) {
        return next(new ErrorHandler("please add all fields", 400))
    };



    if (user) {
        return next(new ErrorHandler("user already registered", 409))
    };

   
    const fileUri = getDataUri(file);

    const mycloud = await cloudinary.v2.uploader.upload(fileUri.content);

    user = await User.create({
        name,
        email,
        password,
        role,
        avatar: {
            public_id: mycloud.public_id,
            url: mycloud.secure_url
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
        success: true,
        user,
    })


});
//password changing
export const changepassword = catchasyncerrer(async (req, res, next) => {

    const { oldPassword, newPassword } = req.body;

    if (!oldPassword || !newPassword) {

        return next(new ErrorHandler("please add all fields", 400))
    };

    const user = await User.findById(req.user._id).select("+password")
    const ismatch = await user.comaparePassword(oldPassword);


    if (!ismatch) {
        return next(new ErrorHandler("incorrect old password", 400))
    };

    user.password = newPassword;
    await user.save();
    res.status(200).json({
        success: true,
        message: 'password changed',
    })


});
//profile updating 
export const updateProfile = catchasyncerrer(async (req, res, next) => {

    const { name, email } = req.body;

    const user = await User.findById(req.user._id).select("+password")
    if (name) {
        user.name = name;
    }
    if (email) {
        user.email = email;
    }


    await user.save();
    res.status(200).json({
        success: true,
        message: 'profile updatied',
    })


});
//updateprfilepicture

export const updateprfilepicture = catchasyncerrer(async (req, res, next) => {

    const file = req.file;

    const user = await User.findById(req.user._id);

    const fileUri = getDataUri(file);

    

    const mycloud = await cloudinary.v2.uploader.upload(fileUri.content);
    // cloudinary add
    await cloudinary.v2.uploader.destroy(user.avatar.public_id);


    user.avatar={
      public_id:mycloud.public_id,
      url:mycloud.secure_url
    }
   
    await user.save();

    res.status(200).json({
        success: true,
        message: 'profile picture updated succesfully',
    })
});


///forgotpassword
export const forgotpassword = catchasyncerrer(async (req, res, next) => {

    const { email } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
        return next(new ErrorHandler("user not founs", 400))
    };

    const restToken = await user.getRestToken();

    await user.save();

    //sendtoken via email
    //http://localhost:3000/resetpassword/restToken/fsdfsdfsgddgg
    const url = `${process.env.frontend_url}/resetpassword/${restToken}`;
    const mailMessage = `click on the link to reser your password. ${url}.if you have not requested then please ignore`;
    await sentEmail(user.email, " cousrse Bundler ressetpassword", mailMessage)

    res.status(200).json({
        success: true,
        message: `Reset password send to ${user.email}`,
    })
});

///resetPassword
export const resetPassword = catchasyncerrer(async (req, res, next) => {

    const { token } = req.params;


    const resetpasswordToken = crypto.createHash('sha256')
        .update(token)
        .digest('hex');



    const user = await User.findOne({
        resetpasswordToken,
        resetpasswordExpire: {
            $gt: Date.now()
        },

    })

    if (!user) {
        return next(new ErrorHandler('token is invalid or has been expired'))
    };

    user.password = req.body.password;

    user.resetpasswordExpire = undefined;
    user.resetpasswordToken = undefined;

    await user.save();
    res.status(200).json({
        success: true,
        message: 'password chnage successfully',
    })
});

//addtoplaylist

export const addtoplaylist = catchasyncerrer(async (req, res, next) => {

    const user = await User.findById(req.user._id);




    const course = await Course.findById(req.body.id);


    if (!course) {
        return next(new ErrorHandler("invlaid course id", 404));
    };


    const itemExist = user.playlist.find((item) => {

        if (item.course.toString() === course._id.toString()) {
            return true
        }
    });


    if (itemExist) {
        return next(new ErrorHandler("already exist", 409));
    };

    user.playlist.push({
        course: course._id,
        poster: course.poster.url
    })

    await user.save();

    res.status(200).json({
        success: true,
        message: 'added to playlist successfully', itemExist

    })
});

//removFromplaylistt

export const removeFromplaylistt = catchasyncerrer(async (req, res, next) => {


    const user = await User.findById(req.user._id);




    const course = await Course.findById(req.query.id);


    if (!course) {
        return next(new ErrorHandler("invlaid course id", 404));
    };


    const newPlaylist = user.playlist.filter((item) => {

        if (item.course.toString() !== course._id.toString()) {
            return item
        }

    });


    user.playlist = newPlaylist;
    await user.save();

    res.status(200).json({
        success: true,
        message: 'Removed successfully'

    })


    res.status(200).json({
        success: true,
        message: 'password chnage successfully',
    })
});