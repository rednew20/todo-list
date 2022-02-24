import React from 'react'
import Task from './Task'
import { useState } from 'react';

const TodoList = ({ name, tasks, onDelete }) => {
  //const [taskList, setTaskList] = useState(tasks);

  const clickHandle = () => {
    console.log('clicked');
  }

  return (
    <div>
      <div>
        <h1>my task in the list {name} </h1>
        Add Task to the list:<input type="text" name="todolstname" />
        <button className='btn' onClick={clickHandle}>Create Task</button>
        <Task tasks={tasks} onDelete={onDelete} />
      </div>
    </div>
  )
}

export default TodoList