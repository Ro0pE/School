import axios from 'axios'
const baseUrl = 'http://localhost:3001/todos'

  const getAll = async () => {
    const request = axios.get(baseUrl)
    const response = await request
    return response.data.todos
  }
  const updateTodo = async (id, newObject) => {
    console.log('updating ....')
    const request =  axios.put(`${baseUrl}/${id}`, newObject)
    const response = await request
    console.log('res data ' , response.data)
 
   return response.data
  }
  const deleteTodo = async (id) => {
    console.log('updating ....')
    const request =  axios.delete(`${baseUrl}/${id}`)
    const response = await request
    console.log('res data ' , response.data)
 
   return response.data
  }


  // eslint-disable-next-line import/no-anonymous-default-export
  export default  {getAll,updateTodo,deleteTodo}