import axios from 'axios'
const baseUrl = 'http://localhost:3001/todos'

  const getAll = async () => {
    const request = axios.get(baseUrl)
    
    const response = await request
    console.log('req' , response.data)
    return response.data.todos
  }
  const updateTodo = async (id, newObject) => {
    const request = axios.put(`${baseUrl}${id}`, newObject)
    const response = await request
    return response.data
  }


  // eslint-disable-next-line import/no-anonymous-default-export
  export default  {getAll,updateTodo}