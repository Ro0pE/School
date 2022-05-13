import axios from 'axios'
import { useState, useEffect } from 'react'
import todoService from './services/Todos.js'

const baseUrl = 'http://localhost:3001/todos'



const App = () => {
  const [todoList, setTodoList] = useState([])
  const [newTodo, setNewTodo] = useState('')

  useEffect(() => {
    todoService
    .getAll()
    .then(todo => {
      setTodoList(todo)
    })
    console.log(todoList)
  },[])

  const addNewTodo = async newObject => {
    try {
      const response = await axios.post(baseUrl, newObject)
      return response.data
    } catch(error){
      console.log('error adding note')
    }

  }



  const addTodo = () => {
    console.log('adding todoo. . ', newTodo)
    let newTodoItem = {
      todo: newTodo,
      status: false
    }
    addNewTodo(newTodoItem).then(todo => {
      setTodoList(todoList.concat(todo))
    })

  }

  const handleTodo = (event)=> {
    setNewTodo(event.target.value)
    
  }
  const updateTodoStatus = async (event) => {
    
  
    const id = event.target.value
    const todo = todoList.find(todo => todo._id === id)
    const updatedTodo = {...todo, status:!todo.status}

    await axios.put(`${baseUrl}/${id}`,updatedTodo)
   
    todoService
    .getAll()
    .then(todo => {
      setTodoList(todo)
    })



 
   


    //return response.data

  }
const notCompletedTasks = todoList.filter(todo => todo.status === false)
const completedTasks = todoList.filter(todo => todo.status === true)

  return (
    <div>
      <h1> Todo app</h1>


      
      <h2> New todo</h2>
      <form onSubmit={addTodo}>
      <input onChange={handleTodo}></input>
      <button> Add todo</button>
      </form>

      <h2>Todo list</h2>
      <div> {notCompletedTasks.map((todo) => 
        <li key={todo._id}>{todo.todo} <button value={todo._id} onClick={updateTodoStatus}>Done</button></li> 
      )} </div>


      <h2>Completed Todos</h2>
      <div> {completedTasks.map((todo) => 
        <li key={todo._id}>{todo.todo}<button value={todo._id} onClick={updateTodoStatus}>Mark undone</button></li>
      )} </div>


    </div>
  )
}






export default App;
