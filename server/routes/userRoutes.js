import express from "express";
import { login, register ,logout, getmyprofile, changepassword, updateProfile, updateprfilepicture, forgotpassword,  resetPassword} from "../controlers/userControler.js";
import {isAuthanticate} from '../midlewares/auth.js'

const router =express.Router();

router.route('/register').post(register)
router.route('/login').post(login)
router.route('/logout').get(logout)
router.route('/me').get(isAuthanticate,getmyprofile)
router.route('/changepassword').put(isAuthanticate,changepassword)
router.route('/updateprfile').put(isAuthanticate,updateProfile)
router.route('/updateprfilepicture').put(isAuthanticate,updateprfilepicture)
router.route('/forgotpassword').post(forgotpassword)
router.route('/resetpassword/:token').put(resetPassword)



export default router;