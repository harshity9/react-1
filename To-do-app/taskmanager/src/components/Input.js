import React, { useContext, useState } from 'react'
import { TaskContext } from '../context/TaskContext'


const Input = () => {

  const [text, setText] = useState('')
  
  const tasklist = useContext(TaskContext)
  
  function handleChange(e){
    setText(e.target.value)
  }

  function handleClick (){
     (tasklist.tasks).push(text)
     console.log((tasklist.tasks))
}

  return (
    <div>
<div className="input" onChange={handleChange}>
    <input type="text" />
    <button onClick={handleClick}>Add Task</button>
</div>
    </div>
  )
}

export default Input
