import { useEffect, useState } from "react"
import { TodoProvider } from "./context/TodoContext"
import TodoForm from "./components/TodoForm"
import TodoItem from "./components/TodoItem"


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

    useEffect(()=>{
        const todos = JSON.parse(localStorage.getItem("todos"))

        if (todos && todos.length>0){
            setTodos(todos)
        }
    },[])

    useEffect(()=>{
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    return (
        <TodoProvider value={{todos, addTodo,updateTodo, deleteTodo}}>
        <div className="Addtodo">
           <h2>
            Manage Todo
           </h2>
           <TodoForm></TodoForm>
        </div>
        <div>
           
                {todos.map((todo)=>(
                   <div key={todo.id}>
                    <TodoItem todo={todo}/>
                   </div> 
                ))}
          
        </div>
        </TodoProvider>
    )
}
 
export default App;