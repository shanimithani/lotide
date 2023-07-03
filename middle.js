

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

module.exports = middle;