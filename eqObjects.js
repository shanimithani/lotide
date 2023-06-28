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

const assertEqual = function(object1, object2) {
  if (eqObjects(object1, object2) === true) {
    return `✅✅✅ Assertion passed: ${object1} === ${object2}`;
  } else {
    return `🛑🛑🛑 Assertion failed: ${object1} !== ${object2}`;
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


const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
console.log(assertEqual(eqObjects(shirtObject , anotherShirtObject), true)); // => true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
console.log(assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false)); // => false


const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
console.log(assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject),true)); // => true

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
console.log(assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false)); // => false




