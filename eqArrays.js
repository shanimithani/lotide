
const eqArrays = function(array1, array2) {
  let match = true;
  if (Array.isArray(array1) && Array.isArray(array2)) {
    if (array1.length !== array2.length) {
      match = false;
    } else {
      for (let x = 0; x < array1.length; x++) {
        if (array1[x] !== array2[x]) {
          match = false;
        }
      }
    }
}
  return match;
};    

module.exports = eqArrays;



