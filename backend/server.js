import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import taskRoutes from "./routes/task.route.js";

dotenv.config();

const app = express();

//app.get("/", (req, res) => res.send("this server is ready"));

app.use(express.json());

app.use("/api/tasks", taskRoutes);

app.listen(5000, () => {
    connectDB();
    console.log("this Server started at http://localhost:5000");
});