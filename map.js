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


const double = function (num) {
  return num * 2; 
}

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

let nums1 = [1,2,3,4];
let nums2 = [34];
let nums3 = [2, 0];

console.log(assertArraysEqual(map(nums1, double),[2,4,6,8]));
console.log(assertArraysEqual(map(nums2, double),[68]));
console.log(assertArraysEqual(map(nums3, double),[4,0]));
