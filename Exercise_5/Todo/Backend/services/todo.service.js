import Todo from "../models/todo.model.js"

const addTodo = async ({title, todo, status}) => {
    const newTodo = await new Todo({
        title,
        todo,
        status
    }).save()
    console.log('NEW TOD ? ' , newTodo)
    return newTodo
}

const getTodos = async () => {
   const todos = await Todo.find({})

    return todos
   
}

const updateStatus = async (todo) => {
    console.log('before ret' , todo)
    let updatedTodo = todo
    const newTodo = await Todo.findByIdAndUpdate(updatedTodo._id,updatedTodo, {new: true})
    console.log('returned ?  ' , newTodo)
    return newTodo

}
const changeTitle = async (todo) => {
    console.log('before ret' , todo)
    let updatedTodo = todo
    const newTodo = await Todo.findByIdAndUpdate(updatedTodo._id,updatedTodo, {new: true})
    console.log('returned ?  ' , newTodo)
    return newTodo

}
export default {addTodo, getTodos, updateStatus, changeTitle}