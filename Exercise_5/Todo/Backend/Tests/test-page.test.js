import { expect} from 'chai'
import chai from'chai'
import { json, response } from 'express'
import request from 'request'
import todoService from '../services/todo.service.js'
import dotenv  from 'dotenv'
import mongoose from 'mongoose'
dotenv.config()

const url = process.env.MONGODB_URI
mongoose.connect(url)

// https://github.com/wunderio/note

describe("Testing our API",function(){
    this.beforeEach(function(){
        request('http://localhost:3001/reset') // clear database before each
        console.log('Database is cleared')

      })
it('GET / should return TODO APP', function(done) {
    request('http://localhost:3001/' , function(error, response, body) {
        expect(body).to.equal('TODO APP')
        done()
    })
})
it('return status 200', function(done) {
    request('http://localhost:3001/' , function(error, response, body) {
        expect(response.statusCode).to.equal(200)
        done()
    })
})
it('GET /todos, first todo should be the one we just add', async function() {
    let title = 'First todo'
    let todo = 'blabla'
    let status = false
    const returnedTodo =  await todoService.addTodo({
        title,
        todo,
        status
    })


    request('http://localhost:3001/todos' , function(error, response, body) {

        const todoList = JSON.parse(body)
        expect(todoList.todos[0].title).to.equal(returnedTodo.title)
        
    })
})

})
describe("App functionality",function(){
    this.beforeAll(function(){
        request('http://localhost:3001/reset') // clear database before each
        console.log('Database is cleared')

      })
      it('Database should be empty', function(done) {
        request('http://localhost:3001/todos' , function(error, response, body) {
      
            const todoList = JSON.parse(body)
            expect(todoList.todos).to.be.an('array').that.does.not.include(0)
            done()
        })
    })
        it('Database should have one todo',  async function() {  
            let title = 'Database_test'
            let todo = 'blabla'
            let status = false
            const returnedTodo =  await todoService.addTodo({
                title,
                todo,
                status
            })
            
            request('http://localhost:3001/todos' ,   function(error, response, body) {
                const todoList = JSON.parse(body)
                expect(todoList.todos[0].title).to.equal(returnedTodo.title)
            
            })
           
        })
        it('Database should have one todo left after one more added and one deleted',  async function() {
             let title = 'Database_test2'
             let todo = 'blabla'
             let status = false
            const returnedTodo2 =  await todoService.addTodo({
                title,
                todo,
                status
            })
            
            request('http://localhost:3001/todos' ,  async function(error, response, body) {

                const todoList = JSON.parse(body)
                let id = todoList.todos[0]._id
                await todoService.deleteTodo(id) // deleting first todo
                expect(todoList.todos[0].title).to.equal(returnedTodo2.title)  
    
           
        })
    })
        it('Add a new todo and then change it title',  async function() {
            let title = 'Database_test111111'
            let todo = 'blabla'
            let status = false
            const returnedTodo =  await todoService.addTodo({
                title,
                todo,
                status
            })
            returnedTodo.title = "HELLOY HOORRHAAA"
            const todoWithNewTitle = await todoService.updateTodo(returnedTodo)
            expect(todoWithNewTitle.title).to.equal(returnedTodo.title)  
           
        })
        it('Add todo and mark it done',  async function() { 
            let title = 'Mark me done'
            let todo = 'blabla'
            let status = false
            const returnedTodo =  await todoService.addTodo({
                title,
                todo,
                status
            })

            returnedTodo.status = true
            const markedDone = await todoService.updateTodo(returnedTodo)
            expect(markedDone.status).to.equal(returnedTodo.status)  
            
           
        })
        it('Mark todo undone',  async function() { 
            let title = 'Mark me undone'
            let todo = 'blabla'
            let status = false
            const returnedTodo =  await todoService.addTodo({
                title,
                todo,
                status
            })

            returnedTodo.status = true
            const markedDone = await todoService.updateTodo(returnedTodo)
            markedDone.status = false
            const markedUndone = await todoService.updateTodo(markedDone)
            expect(markedUndone.status).to.equal(markedDone.status)  
            
           
        })

        it('Delete 1st todo from todolist',   function(){
            request('http://localhost:3001/todos' ,  async function(error, response, body) {
                const todoList = JSON.parse(body)
                const id = todoList.todos[0]._id   // get 1st todo id
                const todo = todoList.todos[0]
                const deletedTodo =  await todoService.deleteTodo(id)
         

                expect(todo.title).to.equal(deletedTodo.title)
                expect(todo.todo).to.equal(deletedTodo.todo)
                expect(todo._id).to.equal(deletedTodo._id)
        
            })

        })

    })




    
    

