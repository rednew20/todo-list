import React from 'react'


const Task = ({ todoId, tasks, onDelete, onComplete }) => {

  //console.log(tasks);

  return (
    <div className="d-flex flex-column d-inline-flex ">
      {tasks.map((task) => (
        <span key={task.taskid} className=" bg-body rounded p-1 m-1 align-items-end">
          {task.name}
          <span className=" d-inline-block justify-content-end">
            <i className="fa-solid fa-square-check p-2" style={{ color: 'blue', cursor: 'pointer' }} onClick={() => onComplete(todoId, task.taskid)}></i>
            <i className="fa-solid fa-pen-to-square p-2"></i>
            <i style={{ color: 'red', cursor: 'pointer' }} className="fa-solid fa-delete-left" onClick={() => onDelete(todoId, task.taskid)}></i>
          </span>
        </span>
      ))
      }
    </div>

  )
}

export default Task