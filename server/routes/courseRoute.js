import express from "express";
import  {getAllCourse}  from "../controlers/courseControl.js";
import  {createCourse } from "../controlers/courseControl.js";
const router =express.Router();
//get all course without letures
router.route("/courses").get(getAllCourse);
//create cousrses new . only admin
router.route("/createcourse").post(createCourse);
export default router;