import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import taskRoutes from "./routes/task.route.js";

import cors from "cors"; // this code may not be needed since deploying monolithic 
import path from "path";

//import { fileURLToPath } from "url";
//const __filename = fileURLToPath(import.meta.url);
//const __dirname = path.dirname(__filename);


const PORT = process.env.PORT || 5000;

dotenv.config();

const app = express();

//app.get("/", (req, res) => res.send("this server is ready"));

app.use(express.json());

app.use("/api/tasks", taskRoutes);


//following code are an attempt to put this online live now, before this, it has been full stack working locally well
const __dirname = path.resolve();

if (process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "../frontend/dist")));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "../frontend/dist/index.html")); //"frontend", "dist", "index.html"
    });
};




app.listen(5000, () => {
    connectDB();
    console.log("this Server started at http://localhost:5000");
});