const assert = require('chai').assert;
const middle   = require('../middle');


describe("#middle", () => {
  it("one element for odd array", () => {
    assert.deepEqual(middle([1,2,3,4,5]), [3]);
  });
  it("two elements for even array", () => {
    assert.deepEqual(middle([1,2,3,4]), [2,3]); 
  });

});
