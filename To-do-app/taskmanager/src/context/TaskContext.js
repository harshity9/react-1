import { createContext, useState } from "react";

export const TaskContext = createContext();

export const TaskProvider =  ({children})=>{
    const [tasks, setTasks] = useState([]);
    
    const addTask = (task)=>setTasks((prev)=>[...prev,task]);
    
    const updateTask = (id, updatedTask)=>
        setTasks((prev)=>
        prev.map((task)=> (task.id === id ? {...task, ...updatedTask}: task)))
    
    const deleteTask = (id) =>
        setTasks((prev) => prev.filter((task) => task.id !== id));
    

return (
    <TaskContext.Provider value={{tasks, addTask, updateTask, deleteTask}}>
        {children}
    </TaskContext.Provider>
    );
};