import  express  from "express";
import dotenv from 'dotenv';
import ErrerMiddleware from './midlewares/errer.js'
import cookieparser from "cookie-parser"
dotenv.config({path:'./config/.env'});

const app= express();

app.use(cookieparser());

//using midleares
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));
//importing use routes &routes
import course from './routes/courseRoute.js';
import user from './routes/userRoutes.js'
app.use("/api/v1",course);
app.use("/api/v1",user);
export default app;
//import 
app.use(ErrerMiddleware);