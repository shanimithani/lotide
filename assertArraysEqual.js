const eqArrays = require("./eqArrays");

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    return `✅✅✅ Assertion passed: ${array1} === ${array2}`;
  } else {
    return `🛑🛑🛑 Assertion failed: ${array1} !== ${array2}`;
  }
};

module.exports = assertArraysEqual;




