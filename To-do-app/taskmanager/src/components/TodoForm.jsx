import React, { useState } from 'react'
import { TodoContext, useTodo } from '../context/TodoContext'

function TodoForm() {

const [todo, setTodo]= useState('')
const{addTodo}= useTodo()

const add = (e)=>{
    e.preventDefault()

    if (!todo) return

    addTodo({todo:todo})
    setTodo('')

    }

  return (
   <>
   <form onSubmit={add}>
    <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)}/>
    <button>+</button>
   </form>
   
   </>
  )
}

export default TodoForm
