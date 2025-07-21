import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
    {
        text:{
            type: String,
            required: true,
        },
        completed:{
            type: Boolean,
            default: false,
        },
    },{timesamps:true}
);

const Task = mongoose.model("task", taskSchema);

export default Task;