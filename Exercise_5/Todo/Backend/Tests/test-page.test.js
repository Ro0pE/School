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


const todosMock =  [
    {
      _id: '627b866570ba135528a8c20a',
      todo: 'Pese ikkunat',
      status: false,
      __v: 0
    },
    {
      _id: '627b88267bdededb4358aeaa',
      todo: 'Syö kanaa',
      status: true,
      __v: 0
    }
  ]



describe("Testing our API",function(){
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
it('GET /todos, first todo should be Pese ikkunat', function(done) {
    request('http://localhost:3001/todos' , function(error, response, body) {

        const todoList = JSON.parse(body)
        expect(todoList.todos[0].todo).to.equal(todosMock[0].todo)
        done()
    })
})
it('GET /todos, second todo should be Syö kanaa', function(done) {
    request('http://localhost:3001/todos' , function(error, response, body) {
  
        const todoList = JSON.parse(body)
        expect(todoList.todos[1].todo).to.equal(todosMock[1].todo)
        done()
    })
})
})
describe("Add user functionality",function(){
    it('should add user to database', async function() {
            const todo = 'Database_test'
            const status = false
            const returnedTodo = await todoService.addTodo({
                todo,
                status
            })
            
             expect(returnedTodo.todo).to.equal(todo)
             expect(returnedTodo.status).to.equal(status)
            
        })


        
     
       
      
    })

    
    

