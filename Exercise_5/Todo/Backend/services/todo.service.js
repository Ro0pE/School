import Todo from "../models/todo.model.js"

const addTodo = async ({title, todo, status}) => {
    const newTodo = await new Todo({
        title,
        todo,
        status
    }).save()
    return newTodo
}

const getTodos = async () => {
   const todos = await Todo.find({})

    return todos
   
}

const updateTodo = async (todo) => {
    let updatedTodo = todo
    console.log('back ' ,updatedTodo)
    const newTodo = await Todo.findByIdAndUpdate(updatedTodo._id,updatedTodo, {new: true})
    return newTodo

}


const deleteTodo = async (id) => {

    const deletedTodo = await Todo.findByIdAndDelete(id)
    console.log('deteling ..  ' , deletedTodo)
    return deletedTodo
  
}
const deleteAll = async (id) => {

    const deletedTodo = await Todo.deleteMany({})

    return deletedTodo
  
}
export default {addTodo, getTodos, updateTodo, deleteTodo, deleteAll}