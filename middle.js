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

const middle = function(array) {
  midArray = [];
  if (array.length > 2) {
    if (array.length % 2 === 0) {
      midArray.push(array[array.length/2 -1]);
      midArray.push(array[array.length/2]);
    }
    else {
      midArray.push(array[(array.length - 1)/2]);
    }
  }
  return midArray;
}

console.log(assertEqual(middle([1,2,3,4,5]),[3]));
console.log(assertEqual(middle([1,2,3,4]),[2,3]));
console.log(assertEqual(middle([1,2]),[]));
console.log(assertEqual(middle([1]),[]));