import React, { useState } from 'react'
import { useTodo } from '../context/TodoContext'

function TodoItem({todo}) {
    const [isTodoEditable, setIsTodoEditable]= useState(false)
    const [todoMsg, setTodoMsg]= useState(todo.todo)
     const {updateTodo, deleteTodo}= useTodo()

     const editTodo = ()=>{
        updateTodo(todo.id, {...todo, todo: todoMsg})
        setIsTodoEditable(false)
     }

     return (
      <div>
      <input type="text" value={todoMsg} onChange={(e)=>setTodoMsg(e.target.value)} readOnly={!isTodoEditable}/>
      <button onClick={()=>{
        if (isTodoEditable){
            editTodo();
        } else setIsTodoEditable((prev)=> !prev)
      }}>Edit</button>
      <button onClick={()=> deleteTodo(todo.id)}>DEL</button>
     </div>
     )
}

export default TodoItem
