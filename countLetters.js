const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅ Assertion passed: ${actual} === ${expected}`;
  } else {
    return `🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`;
  }
};

const countLetters = function(sentence) {
  const counts = {};
  for (const letter of sentence){
    if (letter !== " ") {
      if (counts[letter]){
        counts[letter] += 1;
      }
      else {
        counts[letter] = 1;
      }
    }  
  }
  return counts; 
};


console.log(countLetters("yooo this is sick"))