const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅ Assertion passed: ${actual} === ${expected}`;
  } else {
    return `🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`;
  }
};

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


// TEST CODE
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); //true
console.log(assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false)); //false
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, "3"]), false)); //false
