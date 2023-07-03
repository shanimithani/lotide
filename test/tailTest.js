/*const assertEqual = require('../assertEqual');
const tail = require('../tail');

const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(assertEqual(result.length, 2)); // ensure we get back two elements
console.log(assertEqual(result[0], "Lighthouse")); // ensure first element is "Lighthouse"
console.log(assertEqual(result[1], "Labs")); // ensure second element is "Labs" */

const assert = require('chai').assert;
const tail   = require('../tail');
const result = ["Hello", "Lighthouse", "Labs"];

describe("#tail", () => {
  it("ensure we get back two elements", () => {
    assert.strictEqual(tail(result).length, 2);
  });
  it("ensure first element is Lighthouse and 2nd element is labs", () => {
    assert.deepEqual(tail(result), ['Lighthouse','Labs']); 
  });

});