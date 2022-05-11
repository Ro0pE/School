import axios from 'axios'
import { useState, useEffect } from 'react'
const baseUrl = 'http://localhost:3001/todos'


const App = () => {
  const [todoList, setTodoList] = useState([])


  useEffect(() => {
    axios.get(baseUrl).then(response => {
      setTodoList(response.data)
    })
  },[])

const completed_tasks = todoList.filter(todo => todo.status === true)

  return (
    <div>
      <h1> Todo app</h1>


      
      <h2> New todo</h2>
      <input></input>
      <button> Add todo</button>

      <h2>Todo list</h2>
      <div> {todoList.map((todo) => 
        <li>{todo.todo} <button>Done</button></li> 
      )} </div>


      <h2>Completed Todos</h2>
      <div> {completed_tasks.map((todo) => 
        <li>{todo.todo}</li>
      )} </div>


    </div>
  )
}






export default App;
