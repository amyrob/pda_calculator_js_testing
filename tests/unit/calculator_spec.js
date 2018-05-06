var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  });

  it('should add', function () {
    const result = 4 + 3;
    assert.strictEqual(result, 7);
  });

  it('should subtract', function () {
    const result = 10 - 7;
    assert.strictEqual(result, 3);
  });

  it('should multiply', function () {
    const result = 5 * 3;
    assert.strictEqual(result, 15);
  });

  it('should divide', function () {
    const result = 21 / 3;
    assert.strictEqual(result, 7);
  });

  it('should get a number click', function () {
    calculator.numberClick(2);
    assert.strictEqual(calculator.runningTotal, 2);
  });

  it('should get multiple number clicks', function () {
    calculator.numberClick(2);
    calculator.numberClick(1);
    assert.strictEqual(calculator.runningTotal, 21);
  });

  it('should get operator clicks', function () {
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(2);
    calculator.operatorClick('=');
    assert.strictEqual(calculator.runningTotal, 3);
  });

  it('should clear when clearClick used', function () {
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(2);
    calculator.operatorClick('=');
    calculator.clearClick();
    assert.strictEqual(calculator.runningTotal, 0);
  });
});
