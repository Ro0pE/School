import express from 'express'
import mongoose from 'mongoose'
import dotenv  from 'dotenv'
import cors from 'cors'

dotenv.config();
const app = express()
app.use(cors())
const url = process.env.MONGODB_URI
mongoose.connect(url)

const todoSchema = new mongoose.Schema({
    todo: String,
    status:  Boolean,
})

const Todo = mongoose.model('Todo', todoSchema)
/*
const todo = new Todo({
    todo: 'Pese hampaat',
    status: true
})

todo.save().then(result => {
    console.log('todo saved to db')
    mongoose.connection.close()
})

*/
app.get('/',(request,response) => {
        response.send('TODO APP')
})


app.get('/todos',(request,response) => {
    Todo.find().then(todos => {
        response.send(JSON.stringify(todos))
    })
   
})





const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on  ${PORT}`)
})