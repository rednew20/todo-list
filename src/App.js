import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import TodoList from './components/TodoList';
import { useState } from 'react';


function App() {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      text: 'Groceries',
      tasks: [
        {
          id: 1,
          text: 'buy fruit',
        },
        {
          id: 2,
          text: 'need meet',
        }
      ]
    },
    {
      id: 2,
      text: 'Projects',
      tasks: [
        {
          id: 1,
          text: 'Create hanlders',
        },
        {
          id: 2,
          text: 'Create CSS styles',
        }
      ]
    }
  ]);
  //controllers for the Todo Form
  const [listName, setListName] = useState();

  const addList = (list) => {
    const id = Math.floor(Math.random() * 10000) + 1

    const newList = { id, text: list, tasks: [] }
    console.log(newList);
    setTodoList([...todoList, newList])

  }

  const deleteTask = (id) => {
    console.log('delete task item=', id);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (!listName) {
      alert('Please enter a Name for the list.')
      return;
    }
    addList(listName)

  }

  return (
    <div className="App">
      <h1>ToDo Lists</h1>
      <div>
        <h1>Add List</h1>
        <form onSubmit={onSubmit}>
          <input type="text" onChange={(e) => setListName(e.target.value)} value={listName} />
          <button type="submit" className='btn' >Create List</button>
        </form>

      </div>
      <BrowserRouter>
        <ul>
          <li key='0'><Link to={`/`} >Home </Link></li>
          {todoList.map((taskList) => (
            <li key={taskList.id}><Link to={`/todolist-${taskList.id}`} >{taskList.text} </Link></li>
          ))}
        </ul>
        <Routes>
          <Route key="0" exact path="/" />
          {todoList.map((taskList) => (
            <Route key={taskList.id} path={`/todolist-${taskList.id}`} element={
              <TodoList name={taskList.text} tasks={taskList.tasks} onDelete={deleteTask} />
            } />
          ))}
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
