
import app from "./app.js";
import { conectDb } from "./config/database.js";
import cloudinary from 'cloudinary'
conectDb();
cloudinary.v2.config({
   cloud_name:process.env.cloud_name,
   api_key:process.env.api_key,
   api_secret:process.env.api_secret
});

app.listen( process.env.PORT,()=>
{
   console.log( `server is up on ${ process.env.PORT}`);
}
)