const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅ Assertion passed: ${actual} === ${expected}`;
  } else {
    return `🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`;
  }
};

const findKeyByValue = function (obj, item) {
  let mainKey = "";
  const checkValues = Object.values(obj);
  const checkKeys = Object.keys(obj);
  for (const key of checkKeys) {
    if(obj[key] === item) {
      mainKey = key;
      return mainKey;
    }
  }
}
 


const obj = {
  breakfast: "eggs",
  lunch: "cake",
  dinner: "mac and cheese",
  snack: "cake"
}
console.log(findKeyByValue(obj, "cake"));
