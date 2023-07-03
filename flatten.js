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


const flatten = function(array) {
  let finalArray = [];
  for (let x = 0; x < array.length; x++) {
    if (Array.isArray(array[x])) {
      const nestedArray = flatten(array[x]);
      finalArray = finalArray.concat(nestedArray);
    } else {
      finalArray.push(array[x]);
    }
  }
  return finalArray;
};

module.exports = flatten;