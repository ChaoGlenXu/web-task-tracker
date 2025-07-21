import express from 'express';
import Task from '../models/task.model.js';

const router = express.Router();

//get all the tasks
router.get('/', async (req, res) => {
    try{
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({message: error.message});
    } 
});

//add new task
router.post('/', async (req, res) => {
    const task = new Task({
        text: req.body.text
    })
    try {
        const newTask = await task.save();
        res.status(201).json(newTask);
    } catch(error) {
        res.status(400).json({message: error.message})
    }

});

//update a task(text adn/or completed)
router.patch('/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({message: "task not found"});
        }

        if (req.body.text != undefined){
            task.text = req.body.text;
        }
        
        if (req.body.completed != undefined){
            task.completed = req.body.completed;
        }

        const updateTask = await task.save();
        res.json(updateTask);

    } catch (error) {
        res.status(400).json({message: error.message});
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const to_delete = await Task.findByIdAndDelete(req.params.id);
        res.json({"task deleted": to_delete})
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

export default router;