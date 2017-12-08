const mocha = require('mocha')
const { expect } = require('chai')
const helloWorld = require('./helloWorld')

describe('hello world', () => {
    it('should return a string when one is passed as argument to the function', () => {
        expect(helloWorld("")).to.equal("")
    })
    it("should return 'Hello world !' when passed 'Hello world !' to the function", () => {
        expect(helloWorld("Hello world !")).to.equal("Hello world !")
    })
})