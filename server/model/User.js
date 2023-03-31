import mongoose from 'mongoose'
import validator from 'validator'
import Jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const schema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, 'please enter your name']
    },
    email: {
        require: [true, 'please enter your email'],
        unique: true,
        type: String,
        validate: validator.isEmail,
    },
    password: {
        require: [true, 'please enter your password'],
        minLenngth: [6, 'atleast 6 charector'],
        type: String,
        select: false,
    },
    role: {
        enum: ["admin", 'user'],
        default: 'user',
        type: String,
        select: false,
    },
    subscription: {
        id: String,
        status: String
    },
    avatar: {
        public_id: {
            type: String,
            require: true
        },
        url: {
            type: String,
            require: true
        },


    },
    playlist: [
        {
            course: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Course'
            }, poster: String,
        }
    ],
    createdAT: {
        type: Date,
        default: Date.now
    },
    resetpasswordToken: String,
    resetpasswordExpire: String
})

schema.methods.getJWTtoke =  function () {
    return  Jwt.sign({ _id: this._id }, process.env.secreKey, {
        expiresIn: process.env.jwtExpiry
    })
};
// password hasing
schema.pre('save' , async function (next) {

    if(!this.isModified('password')) return next();

    this.password= await bcrypt.hash(this.password,10)
    next();
})
//password check encrypt
schema.methods.comaparePassword = async function (password) {
    return await bcrypt.compare(password,this.password)
    
};


export const User = mongoose.model("User", schema)