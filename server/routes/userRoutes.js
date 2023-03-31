import express from "express";
import { login, register ,logout, getmyprofile} from "../controlers/userControler.js";
import {isAuthanticate} from '../midlewares/auth.js'

const router =express.Router();

router.route('/register').post(register)
router.route('/login').post(login)
router.route('/logout').get(logout)
router.route('/me').get(isAuthanticate,getmyprofile)

export default router;