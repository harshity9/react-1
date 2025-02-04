import  { useContext, useEffect } from 'react'
import { TaskContext } from '../context/TaskContext'


function TaskList() {

const contexttask = useContext(TaskContext)
const ListTasks = contexttask.tasks

return (
  <>
  <div>
  {ListTasks.map((task, i) => (
          <li key={i}>
            {task}
          </li>
        ))}
  </div>
  </>
)

}

export default TaskList
