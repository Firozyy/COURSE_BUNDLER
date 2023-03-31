import { catchasyncerrer } from "../midlewares/catchadyncErrer.js";
import { Course } from "../model/Course.js";
import ErrorHandler from "../utils/errorHandler.js";


export const getAllCourse = catchasyncerrer(
  async (req, res, next) => {
    const courses = await Course.find().select("-letures");
    res.status(200).json({
      success: true,
      courses,
    })
  }
);


export const createCourse = catchasyncerrer(
  async (req, res, next) => {
    //using multer for getting req.body
  
    const { title, catagory, discription, createdBy } = req.body;
  if (!title || !catagory || !discription || !createdBy)  { 
   return next(new ErrorHandler("please add all fields", 400))}
    const file = req.file;

    await Course.create({
      title,
      createdBy,
      catagory,
      discription,
      poster: {
        public_id: "temp", url: "temp"
      },
    });

    res.status(201).json({
      success: true,
      message: "course created successfully you can add lectures"
    });
  }
);