import { expect } from 'chai'
import request from 'request'

describe("Testing our API",function(){
it('GET / body', function(done) {
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

})