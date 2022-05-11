import { expect } from 'chai'
import { json } from 'express'
import request from 'request'

const todosMock =  [
    {
      _id: '627b866570ba135528a8c20a',
      todo: 'Pese auto',
      status: false,
      __v: 0
    },
    {
      _id: '627b88267bdededb4358aeaa',
      todo: 'Pese hampaat',
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
it('GET /todos, first todo should be Pese Auto', function(done) {
    request('http://localhost:3001/todos' , function(error, response, body) {

        const todoList = JSON.parse(body)
        expect(todoList.todos[0].todo).to.equal(todosMock[0].todo)
        done()
    })
})
it('GET /todos, second todo should be Pese Hampaat', function(done) {
    request('http://localhost:3001/todos' , function(error, response, body) {
  
        const todoList = JSON.parse(body)
        expect(todoList.todos[1].todo).to.equal(todosMock[1].todo)
        done()
    })
})
})
describe("Testing our database",function(){

    
    })