import React from 'react'


const Task = ({ todoId, tasks, onDelete }) => {

  //console.log(tasks);

  return (
    <div>
      {tasks.map((task) => (
        <h3 key={task.taskid}>{task.name}
          <i style={{ color: 'red', cursor: 'pointer' }} className="fa-solid fa-delete-left" onClick={() => onDelete(todoId, task.taskid)}></i>
        </h3>
      ))
      }
    </div>

  )
}

export default Task