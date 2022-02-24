import React from 'react'


const Task = ({ tasks, onDelete }) => {

  console.log(tasks);

  return (
    <div>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}
          <i style={{ color: 'red', cursor: 'pointer' }} className="fa-solid fa-delete-left" onClick={() => onDelete(task.id)}></i>
        </h3>
      ))
      }
    </div>

  )
}

export default Task