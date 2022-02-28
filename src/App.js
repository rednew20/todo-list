import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import TodoList from './components/TodoList';
import { useState } from 'react';


function App() {
  const [todoName, setTodoName] = useState('');
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      text: 'Groceries',
      tasks: [
        {
          taskid: 1,
          name: 'buy fruit',
        },
        {
          taskid: 2,
          name: 'need meet',
        }
      ]
    },
    {
      id: 2,
      text: 'Projects',
      tasks: [
        {
          taskid: 1,
          name: 'Create hanlders',
        },
        {
          taskid: 2,
          name: 'Create CSS styles',
        }
      ]
    }
  ]);
  //controllers for the Todo Form

  //console.log(todoList);
  const onSubmit = (e) => {
    e.preventDefault();
    if (!todoName) {
      alert('Please enter a Name for the list.')
      return;
    }
    addList(todoName)
    setTodoName('');
  }

  const addList = (list) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newList = { id, text: list, tasks: [] }
    setTodoList([...todoList, newList]);
  }

  const deleteTodo = (id) => {
    console.log('delete todo=' + id)
    const newTodos = todoList.filter(todo => todo.id !== id);
    setTodoList(newTodos);
  }


  const updateTask = (todoId, taksName) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { taskid: id, name: taksName }

    // const newtodos = todoList.map(todo => {
    //   let tasks = todo.tasks; //
    //   if (todo.id === todoId) {
    //     tasks.push(newTask) // add the new task 
    //     return todo;
    //   }
    //   return todo;
    // })

    const newTodos = todoList.map(todo => {
      if (todo.id === todoId) {
        //spread todo, and on the current  todo tasks add newTask
        return { ...todo, tasks: [...todo.tasks, newTask] }
      }
      return todo;
    })
    setTodoList(newTodos)
  }

  const deleteTask = (todoId, taskId) => {

    const updateTodos = todoList.map(todo => {
      if (todo.id === todoId) {
        // spread todos, the todo.tasks will be filterd, when task has tasksid diff than task clicked
        return { ...todo, tasks: (todo.tasks.filter(task => task.taskid !== taskId)) }
      }
      return todo;
    })
    //const todos = todoList.filter((todo) => !todo.id)
    setTodoList(updateTodos)
  }

  return (
    <BrowserRouter>
      <div >
        <nav className="navbar navbar-light mb-3" style={{ 'background': '#e3f2fd' }}>
          <div className="container-fluid">
            <a className="navbar-brand h1" href="/">ToDo's Tracker</a>
          </div>
        </nav>
        <div className="container-md align-items-center">
          <h2 className="lead">Add List</h2>
          <form onSubmit={onSubmit} className="row g-3">
            <div className="col-4 mb-3">
              <input className="form-control" type="text" id="todoName" placeholder="Todo Name" onChange={(e) => setTodoName(e.target.value)} value={todoName} />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary mb-3"> <i className="fa-solid fa-circle-plus"></i> Add </button>
            </div>
          </form>
        </div>

        <div className='container-md'>
          <div className="row row-cols-5 pt-5">
            {todoList.map((todos) => (
              <div key={todos.id} className="col p-2">
                <div className="card border-dark">
                  <div className="card-header text-white bg-primary mb-3">
                    <Link to={`/todolist-${todos.id}`} >{todos.text} </Link>
                  </div>
                  <div className="card-body">
                    <span>
                      <i className="fa-solid fa-pen-to-square"></i> <i className="fa-solid fa-trash" onClick={() => deleteTodo(todos.id)}></i>
                    </span>


                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
        <Routes>
          <Route key="0" exact path="/" element={<nav></nav>} />
          {todoList.map((todos) => (
            <Route key={todos.id} path={`/todolist-${todos.id}`} element={
              <TodoList id={todos.id} name={todos.text} tasks={todos.tasks} onDelete={deleteTask} updateTask={updateTask} />
            } />
          ))}
        </Routes>

      </div >
    </BrowserRouter>
  );
}

export default App;
