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
  const [test , setTest] = useState(false)

  useEffect(() => {
    console.log('rendering')
    todoService
    .getAll()
    .then(todo => {
      setTodoList(todo)
    })
    
  },[])

  const addNewTodo = async newObject => {
 
    try {
      const response = await axios.post(baseUrl, newObject)
      return response.data
    } catch(error){
      console.log('error adding note')
    }

  }
  const deleteTodo = async (event) => {
    const id = event.target.value
    todoService
    .deleteTodo(id)
    setTodoList(todoList.filter(toodoo => toodoo._id !== id))
  }

  const addTodo = () => {
    let newTodoItem = {
      title: todoTitle,
      todo: newTodo,
      status: false
    }
    if (todoTitle === ''){
      window.alert("Title can't be empty")
      return
    }
    if (newTodo === ''){
      window.alert("Content can't be empty")
      return
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
    if (updateTitle === ''){
      window.alert("Title can't be empty")
      return
    }
    const todo =  todoList.find(todo => todo._id === id)
    const updatedTodo = {...todo, title:updateTitle}
    todoService
    .updateTodo(id,updatedTodo)
    .then(todo => {
      setTodoList(todo)
    })

  }
  const updateTodoStatus = async (event) => {
    
    const id = event.target.value
    const todo = todoList.find(todo => todo._id === id)
    const updatedTodo = {...todo, status:!todo.status}
    let temp_list = todoList.filter(todo => todo._id !== id)
    temp_list.push(updatedTodo)
    todoService
    .updateTodo(id,updatedTodo)
    setTodoList(temp_list)

  }


  return (
    <div>
      <h1> Todo app</h1>
      <h2> New todo</h2>
      <form id='addTodo' onSubmit={addTodo}>
        <p>Title</p>
      <input id='todoTitle' onChange={handleTitle}></input>
        <p>Content</p>
      <input id='todoContent' onChange={handleTodo}></input>
      <br></br>
      <button> Add todo</button>
      </form>

      <h2>Todo list</h2>
      <div> {todoList.filter(todoo => todoo.status === false).map(todo => (
        <li key={todo._id}>
               <span>  {todo.title}: {todo.todo} </span>
               <button value={todo._id} onClick={updateTodoStatus}>Done</button>
               <button value={todo._id} onClick={toggleShowEditor}>Edit</button>
               <button value={todo._id} onClick={deleteTodo}>X</button>
              
          
        </li> 
      ))}
      </div> 



      <h2>Completed Todos</h2>
      <div> {todoList.filter(todoo => todoo.status === true).map(todo => (
        <li key={todo._id}>
        <span>{todo.title}:{todo.todo}</span>
        <button value={todo._id} onClick={updateTodoStatus}>Mark undone</button>
        <button id="EditTitle"  value={todo._id} onClick={toggleShowEditor}>Edit</button>
        <button value={todo._id} onClick={deleteTodo}>X</button>
        
        </li> 
      ))} </div>
          <div>
          {targetTodo !== '' &&                
          <div>
          <h3>Chane todo title</h3>
          <span>Change title {targetTodo} to: </span>
          <form onSubmit={changeTitle}>
          <input id="EditTitle"  onChange={handleNewTitle}></input>
          <button id="change" value={targetId}>Change</button>
          <button onClick={() => setTargetTodo('')}>Hide</button>
          </form>
          </div>
            }
            </div>
    </div>

  )
}






export default App;
