import express from "express";
import db from "./config/database.js";
import dotenv from "dotenv";
import router from "./routes/routes.js";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser"
import cors from "cors";
import FileUpload from "express-fileupload"


dotenv.config();


const app = express();

app.use(cors({credential: true, origin:'*'}));
app.use(FileUpload())
app.use(express.static("public"))
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);


try {
    await db.authenticate();
    console.log("Database Connected....")
} catch (error) {
    console.error(error);

}



app.listen(process.env.PORT || 5000, ()=> console.log("Server Running at port 5000"))