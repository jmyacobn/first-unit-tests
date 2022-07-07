// functions-test.js

var assert = require('chai').assert;
var addTwoNumbers = require('./functions.js').addTwoNumbers;
var sayHello = require('./functions.js').sayHello;
var buildCar = require('./functions.js').buildCar;

describe('functions', function() {

  describe('addTwoNumbers', function() {

    it('should be able to add zero to zero', function() {
      var result = addTwoNumbers(0, 0)
      assert.equal(result, 0)
    })

    it('should be able to add 1 to 0', function() {
      var result = addTwoNumbers(1, 0)
      assert.equal(result, 1)
    })

    it('should be able to add 1 to 1', function() {
      var result = addTwoNumbers(1, 1)
      assert.equal(result, 2)
    })
  })

  describe('sayHello', function() {
    it('should be able to say hello to Leta', function() {
      var result = sayHello('Leta')
      assert.equal(result, 'Hi there Leta!')
    })

    it('should be able to say hello to Casey', function() {
      var result = sayHello('Casey')
      assert.equal(result, 'Hi there Casey!')
    })

    it('should not be able to say hello to Will', function() {
      var result = sayHello('Will')
      assert.equal(result, 'No more testing Will!')
    })
  })

  describe('buildCar', function() {
    it('should return a car with a color', function() {
      var color = 'red'
      var result = buildCar(color)
      assert.equal(result.color, color)
    })

    it('should return a car with a type', function() {
      var color = 'red'
      var type = 'truck'
      var result = buildCar(color, type)
      assert.equal(result.type, type)
    })

    it('should return an empty object if there are no details passed', function() {
      var result = buildCar()
      assert.deepEqual(result, {})
    })
  })
})
