import Todo from "../models/todo.model.js"

const addTodo = async ({todo, status}) => {
    const newTodo = await new Todo({
        todo,
        status
    }).save()
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
export default {addTodo, getTodos, updateStatus}