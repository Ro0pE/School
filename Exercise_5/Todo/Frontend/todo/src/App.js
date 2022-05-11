import axios from 'axios'
import { useState, useEffect } from 'react'
const baseUrl = 'http://localhost:3001/todos'


const App = () => {
  const [todoList, setTodoList] = useState([])
  const [newTodo, setNewTodo] = useState('')


  useEffect(() => {
    axios.get(baseUrl).then(response => {
      console.log('test' , response.data)
      setTodoList(response.data.todos)
    })
  },[])

  const addNewTodo = async newObject => {
    console.log('adding '  , newObject)
    try {
      const response = await axios.post(baseUrl, newObject)
      console.log('response  data' , response.data)
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

const completed_tasks = todoList.filter(todo => todo.status === true)

  return (
    <div>
      <h1> Todo app</h1>


      
      <h2> New todo</h2>
      <form onSubmit={addTodo}>
      <input onChange={handleTodo}></input>
      <button> Add todo</button>
      </form>

      <h2>Todo list</h2>
      <div> {todoList.map((todo) => 
        <li key={todo._id}>{todo.todo} <button>Done</button></li> 
      )} </div>


      <h2>Completed Todos</h2>
      <div> {completed_tasks.map((todo) => 
        <li key={todo._id}>{todo.todo}</li>
      )} </div>


    </div>
  )
}






export default App;
