import axios from 'axios'
import { useState, useEffect } from 'react'
import todoService from './services/Todos.js'

const baseUrl = 'http://localhost:3001/todos'



const App = () => {
  const [todoList, setTodoList] = useState([])
  const [newTodo, setNewTodo] = useState('')
  const [todoTitle, setTodoTitle] = useState('')
  const [targetId, setTargetId] = useState('')
  const [targetTodo, setTargetTodo] = useState('')
  const [newTitle, setNewTitle] = useState('')

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
      console.log('PIIIIP')
      const response = await axios.post(baseUrl, newObject)
      console.log('adding todo.... ' , response.data)
      return response.data
    } catch(error){
      console.log('error adding note')
    }

  }



  const addTodo = () => {
    console.log('adding todoo. . ', newTodo)
    let newTodoItem = {
      title: todoTitle,
      todo: newTodo,
      status: false
    }
    addNewTodo(newTodoItem).then(todo => {
      setTodoList(todoList.concat(todo))
    })

  }
  const handleTitle = (event) => {
    setTodoTitle(event.target.value)
    
  }
  const handleNewTitle =(event) => {
    setNewTitle(event.target.value)
  }

  const handleTodo = (event)=> {
    setNewTodo(event.target.value)
    
  }
  const toggleShowEditor = (event) => {
    setTargetId(event.target.value)
    const id = event.target.value
    const todo = todoList.find(todo => todo._id === id)
    setTargetTodo(todo.title)

  }
  const changeTitle = async () => {
    const id = targetId
    const updateTitle = newTitle
    const todo =  todoList.find(todo => todo._id === id)
    const updatedTodo = {...todo, title:updateTitle}

    await axios.put(`${baseUrl}/${id}`,updatedTodo)

    // axios 

    
    /*todoService
    .getAll()
    .then(todo => {
      setTodoList(todo)
    }) */

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
        <p>Title</p>
      <input onChange={handleTitle}></input>
        <p>Content</p>
      <input onChange={handleTodo}></input>
      <br></br>
      <button> Add todo</button>
      </form>

      <h2>Todo list</h2>
      <div> {notCompletedTasks.map((todo) => 
        <li key={todo._id}>
        {todo.title}: {todo.todo}
        <button value={todo._id} onClick={updateTodoStatus}>Done</button>
        <button value={todo._id} onClick={toggleShowEditor}>Edit</button>

        
       
        </li> 
      )} </div>
              {targetTodo !== '' &&
        <div>
        <span>Change title {targetTodo} to: </span>
        <form onSubmit={changeTitle}>
        <input onChange={handleNewTitle}></input>
        <button value={targetId}>Change</button>
        <button onClick={() => setTargetTodo('')}>Hide</button>
        </form>
        </div>
         }


      <h2>Completed Todos</h2>
      <div> {completedTasks.map((todo) => 
        <li key={todo._id}>
        {todo.title}:{todo.todo}
        <button value={todo._id} onClick={updateTodoStatus}>Mark undone</button>
        <button value={todo._id} onClick={toggleShowEditor}>Edit</button>
        
        </li> 
      )} </div>


    </div>
  )
}






export default App;
