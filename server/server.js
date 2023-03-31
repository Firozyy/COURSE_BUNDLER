
import app from "./app.js";
import { conectDb } from "./config/database.js";

conectDb();
app.listen( process.env.PORT,()=>
{
   console.log( `server is up on ${ process.env.PORT}`);
}
)