import { useState } from "react"
import { TodoProvider } from "./context/TodoContext"


function App(){
    const [todos, setTodos] = useState([])

    const addTodo = (todo)=>{
        setTodos((prev)=> [{id: Date.now(),...todo},...prev])
    }

    const updateTodo = (id, todo) =>{
        setTodos((prev)=> prev.map((prevTodo)=> (prevTodo.id === id ? todo : prevTodo)))
    }

    const deleteTodo = (id)=>{
        setTodos((prev)=> prev.filter((todo)=>todo.id !== id))
    }

    return (
        <TodoProvider value={{todos, addTodo,updateTodo, deleteTodo}}>
        <div className="Addtodo">
           <h1>
            Manage Todo
           </h1>
            <input>Add task</input>
            <button>+</button>
        </div>
        <div>
            <p>
                task1
            </p>
            <p>
                task2
            </p>
        </div>
        </TodoProvider>
    )
}