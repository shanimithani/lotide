const eqArrays = function(array1, array2) {
  //console.log(array1, array2)
  let match = true;
  if (array1.length !== array2.length) {
    match = false;
  } else {
    for (let x = 0; x < array1.length; x++) {
      //console.log(array1[x],array2[x]);
      if (array1[x] !== array2[x]) {
        match = false;
      }
    }
  }
  return match;
};

const assertObjectsEqual = function(object1, object2) {
  // Implement me!
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2) === true) {
    return `✅✅✅ Assertion passed: ${inspect(object1)} === ${inspect(object2)}`;
  } else {
    return `🛑🛑🛑 Assertion failed: ${inspect(object1)} !== ${inspect(object2)}`;
  }
};



const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  let match = true;
  if (keys1.length !== keys2.length) {
    match = false;
  }
  for (const key of keys1) {
    //console.log(object1[key])
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      let array1 = object1[key];
      let array2 = object2[key];
      if (!eqArrays(array1,array2)) {
        match = false;
      }
    } else if (object1[key] !== object2[key]) {
      match = false;
    }
  }
  return match;
};

module.exports = assertObjectsEqual;