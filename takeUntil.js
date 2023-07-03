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

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    return `✅✅✅ Assertion passed: ${array1} === ${array2}`;
  } else {
    return `🛑🛑🛑 Assertion failed: ${array1} !== ${array2}`;
  }
};




const takeUntil = function(array, callback) {
  let results = [];
  for (let item of array) {
    if (callback(item)) {
      return results;
    }
    else {
      results.push(item);
    }
  }
  return results;
}


/*const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
console.log(assertArraysEqual(takeUntil(data1, x => x < 0), [1,2,5,7,2]))

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
console.log(assertArraysEqual(takeUntil(data2, x => x === ','),["I've",'been','to','Hollywood']));*/

module.exports = takeUntil;