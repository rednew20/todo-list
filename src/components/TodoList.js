import React from 'react'
import Task from './Task'
import { useState } from 'react';

const TodoList = ({ id, name, tasks, onDelete, updateTask }) => {
  const [newTask, setNewTask] = useState('');
  //const [taskList, setTaskList] = useState(tasks)

  //console.log(tasks)

  /** */
  const onSubmit = (e) => {
    e.preventDefault();
    if (!newTask) {
      alert('Please enter a Name for the task.')
      return;
    }
    updateTask(id, newTask)
    setNewTask('');
  }

  return (
    <div className="container">
      <div>
        <div className="">
          <h1>Add Task to {name} </h1>
          <form onSubmit={onSubmit} className="row g-3">
            <div className="col-4 mb-3">
              <input type="text" className="form-control" name="taskName" onChange={(e) => setNewTask(e.target.value)} value={newTask} />
            </div>
            <div className="col-4 mb-3">
              <button type="submit" className='btn btn-primary' >Create Task</button>
            </div>
          </form>
        </div>
      </div>
      <Task className="container" todoId={id} tasks={tasks} onDelete={onDelete} />
    </div>
  )
}

export default TodoList