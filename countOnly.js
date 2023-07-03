const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅ Assertion passed: ${actual} === ${expected}`;
  } else {
    return `🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`;
  }
};

const countOnly = function(allItems, itemsToCount) {
  const results = {}
  for (const item of allItems) {
    if (itemsToCount[item]) { 
      if (results[item]) {
        results[item] += 1; //It exists and you are incrementing 
      } else {
        results[item] = 1; //You're adding to the results object
      }
    }
  }
  return results;
}

///Test code

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

/*assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
console.log(assertEqual(result1["Jason"], 1));
console.log(assertEqual(result1["Karima"], undefined));
console.log(assertEqual(result1["Fang"], 2));
console.log(assertEqual(result1["Agouhanna"], undefined));*/

module.exports = countOnly;;