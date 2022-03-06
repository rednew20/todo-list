import React, { useState } from 'react'
import TaskForm from './TaskForm';


const Task = ({ todoId, tasks, onDelete, onCompleteTask, editTask }) => {
  const [edit, setEdit] = useState(false);

  return (
    <div className="d-flex flex-column d-inline-flex ">
      {tasks.map((task) => (
        <span key={task.taskid} className=" bg-body rounded p-1 m-1 align-items-end">

          <TaskForm taskname={task.name} edit={edit} />

          <span className=" d-inline-block justify-content-end">
            {task.complete ?
              <i className="fa-solid fa-toggle-on p-2" style={{ color: 'green', cursor: 'pointer' }} onClick={(e) => onCompleteTask(todoId, task.taskid)}></i>
              :
              <i className="fa-solid fa-toggle-off p-2" style={{ cursor: 'pointer' }} onClick={(e) => onCompleteTask(todoId, task.taskid)}></i>
            }
            <i className="fa-solid fa-pen-to-square p-2" onClick={() => setEdit(true)}  ></i>
            <i style={{ color: 'red', cursor: 'pointer' }} className="fa-solid fa-delete-left" onClick={() => onDelete(todoId, task.taskid)}></i>
          </span>
        </span>
      ))
      }
    </div >

  )
}

export default Task