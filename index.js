import express from "express"; // handles routing protocols [get,put,post,delete]
import mongoose from "mongoose"; // mongodb interactions
import bodyParser from "body-parser"; //acts as a middleware to parse incoming request bodies in a middleware before handling then in routes
import dotenv from "dotenv"; // to keep an sensitive data
import cors from "cors"; // cross-origin-resource-sharing middleware to enable or restrict access to resources
import { error } from "console";
import route from "./routes/userRouter.js";


const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const port = process.env.PORT || 7000;
const URL = process.env.MONGOURL;

//connect
mongoose.connect(URL).then(() => {
    console.log("DB Connected Successfully");

    app.listen(port, () => {
        console.log(`server is running on port: ${port}`);
    })
}).catch(error => console.log(error));

app.use("/api",route)