import mongoose from 'mongoose'

const todoSchema = new mongoose.Schema({
    todo: String,
    status:  Boolean,
})
const Todo = mongoose.model('Todo', todoSchema)

export default Todo