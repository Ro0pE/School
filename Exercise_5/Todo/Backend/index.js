import express from 'express'
import mongoose from 'mongoose'
import dotenv  from 'dotenv'
import cors from 'cors'
import Todo from '../Backend/models/todo.model.js'
import todoService from '../Backend/services/todo.service.js'


dotenv.config();
const app = express()
app.use(express.json())
app.use(cors())
const url = process.env.MONGODB_URI
mongoose.connect(url)


app.get('/',(request,response) => {
        response.send('TODO APP')
})


app.get('/todos', async (request,response) => {
   const todos = await todoService.getTodos()
   return response.json({todos})
})

app.post('/todos', async (request,response) => {
    const title = request.body.title
    const todo = request.body.todo
    const status = request.body.status
    console.log('sett' , title, todo, status)
    const newTodo = await todoService.addTodo({title, todo, status})
    return response.json(newTodo.toJSON())
})

app.put('/todos/:id', async (request,response) => {
    const todo = request.body
    console.log('OLD TODO ' , todo)
    const newTodo = await todoService.updateStatus(todo)
    console.log('NEW TODO' , newTodo)
    return response.json(newTodo.toJSON())
    
})





const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on  ${PORT}`)
})