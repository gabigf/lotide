const eqArrays = (arr1, arr2) => {
  for (i = 0; i < arr1.length; i++) {
    if(arr1.length !== arr2.length) {
      return false;
    } else if (arr1[i] !== arr2[i]) {
       return false;
    } 
  }
  return true;
};

const assertEqualArrays = function(actual, expected) {
  (eqArrays(actual, expected)) ? console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

console.log(assertEqualArrays([1,2,4,5], [1,2,4,5]));
console.log(assertEqualArrays([1,2,4,5], [1,2,4,'5']));
