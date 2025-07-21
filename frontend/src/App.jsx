import { useState } from "react";
import axios from 'axios';

function App() {
  const [newTask, setNewTask] = useState("");

  const addTask = async (e) =>{
    e.preventDefault();
    if (!newTask.trim()) return:
    try {
      const response = await axios.post("/api/tasks", {text: newTask})
    } catch (err) {

    } 
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 to-yellow-300 
    flex items-center justify-center p-4">
      <div className="bg-blue-50 rounded-2xl shadow-xl w-full max-w-lg p-8">
        
        <h1 className="text-4xl font-bold text-gray-700 mb-8">Task Manager</h1>
        
        <form className="flex items-center gap-2 shadow-sm border border-gray-200 rounded-2xl p-2">
          <input 
            className="flex-1 outline-none px-3 py-2 text-blue-600 placeholder-gray-400"
            type="text" 
            value={newTask} 
            onChange={(e) => {setNewTask(e.target.value)}} 
            placeholder="What needs to be done?"
            required
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white rounded-2xl px-4 py-2 font-medium cursor-pointer"> Add Task </button>
        </form>
      </div>
    </div>
  );
  
}

export default App
