import  { useContext, useEffect } from 'react'
import { TaskContext } from '../context/TaskContext'

function TaskList() {

  const contexttask = useContext(TaskContext)
  const ListTasks = contexttask.tasks

  
  
  
  
}

export default TaskList
