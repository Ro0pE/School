/* eslint-disable no-undef */
describe('Testing Todo app', function() {
  this.beforeAll(function(){
    cy.request('GET', 'http://localhost:3001/reset')  // reset database before tests
  })
  it('front page can be opened', function() {
    cy.visit('http://localhost:3000/')
    cy.contains('Todo app')

  })
  it('Add a new todo', function() { // add new todo
    cy.visit('http://localhost:3000/')
    cy.contains('Todo app')
    cy.get('#todoTitle').type('some title')
    cy.get('#todoContent').type('some content')
    cy.contains('Add todo').click()
 
  })
 it('Mark the todo "done"', function() { // mark it done
    cy.visit('http://localhost:3000/')
    cy.contains('Done').click()
 
  }) 
  it('Mark the todo "undone"', function() { // mark it done
    cy.visit('http://localhost:3000/')
    cy.contains('Mark undone').click()
 
  }) 
  it('Remove an added todo"', function() { // remove todo
    cy.visit('http://localhost:3000/')
    cy.contains('X').click()
 
  })
  it('Add a new todo without title', function() { // add new todo
    cy.visit('http://localhost:3000/')
    cy.contains('Todo app')
    cy.get('#todoContent').type('some content')
    cy.contains('Add todo').click()
    cy.on('window:alert', text => {
      expect(text).contains("Title can't be empty")
    })
 
   
  }) 
  it('Add a new todo without content', function() { // add new todo
    cy.visit('http://localhost:3000/')
    cy.contains('Todo app')
    cy.get('#todoTitle').type('some title')
    cy.contains('Add todo').click()
    cy.on('window:alert', (text) => {
      expect(text).contains("Content can't be empty")
      
    })
  }) 
  it('Add todo and rename it"', function() { // remove todo
    cy.visit('http://localhost:3000/')
    cy.get('#todoTitle').type('Old title')
    cy.get('#todoContent').type('some content')
    cy.contains('Add todo').click()
    cy.contains('Edit').click()
    cy.get('#EditTitle').type('This is a new title')
    cy.get('button[id="change"]').click()
    cy.contains('This is a new title')
 
  })
})