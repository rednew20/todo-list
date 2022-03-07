import React, { useState } from 'react'

const Task = ({ task, edit }) => {

  const [newName, setNewName] = useState(task.name);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!task.name) {
      alert('Please enter a Name for the task.')
      return;
    }
    //addTask(id, newTask)
    //setNewTask('');
  }

  const editTemplate = (
    <div>
      <form onSubmit={onSubmit} className="row align-content-center">
        <div className="col-6 mb-3">
          <input type="text" className="form-control" name="taskName" onChange={(e) => setNewName(e.target.value)} value={newName} />
        </div>
        <div className="col-6 mb-3">
          <button type="submit" className='btn btn-primary' >Update</button>
        </div>
      </form>
    </div>)

  const viewTemplate = (task.complete?<span style={{textDecoration:'line-through'}}>{task.name}</span>:<span>{task.name}</span>)

  return (
    <span>
      {edit ? editTemplate : viewTemplate}
    </span>
  )
}

export default Task