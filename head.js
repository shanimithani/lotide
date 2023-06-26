const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅ Assertion passed: ${actual} === ${expected}`;
  } else {
    return `🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`;
  }
};

const head = function(values) {
  let first = values[0];
  return first;
};

console.log(assertEqual(head([5,6,7]), 5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));
console.log(assertEqual(head(["Hello"]), "Hello"));
console.log(assertEqual(head([]), undefined));