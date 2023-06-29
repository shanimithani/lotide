const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅ Assertion passed: ${actual} === ${expected}`;
  } else {
    return `🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`;
  }
};

// TEST CODE


console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual(1, 1));
console.log(assertEqual("hi", "hi"));
console.log(assertEqual("2", 2));
