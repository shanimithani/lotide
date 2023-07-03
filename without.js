const eqArrays = function(array1, array2) {
  let match = true;
  if (array1.length !== array2.length) {
    match = false;
  } else {
    for (let x = 0; x < array1.length; x++) {
      if (array1[x] !== array2[x]) {
        match = false;
      }
    }
  }
  return match;
};

const assertEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    return `✅✅✅ Assertion passed: ${array1} === ${array2}`;
  } else {
    return `🛑🛑🛑 Assertion failed: ${array1} !== ${array2}`;
  }
};

const without = function(values, toRemove) {
  let newArray = [];
  for (let x = 0; x < values.length; x++) {
    if (!toRemove.includes(values[x])) {
      newArray.push(values[x]);
    }
  }
  return newArray;
};

/*const words = ["hello", "world", "lighthouse"];
let newArray = without(words, ["lighthouse"]);
// Make sure the original array was not altered by the without function
console.log(assertEqual(words, ["hello", "world", "lighthouse"]));
console.log(newArray);*/

module.exports = without;
