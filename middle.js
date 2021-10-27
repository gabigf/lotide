const eqArrays = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i] || arr1.length !== arr2.length) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  (eqArrays(actual, expected)) ? console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const middle = arr => {
  const midArray = [];
  
  if (arr.length <= 2) {
    return midArray;
  } else if (arr.length % 2 === 0) {
    midArray.push(arr[arr.length / 2 - 1], arr[arr.length / 2]);
  } else if (arr.length % 2 !== 0) {
    midArray.push(arr[Math.ceil(arr.length / 2)]);
  } 

  return midArray;
}

console.log(middle([1]));
console.log(middle([1, 2]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4]));
console.log(middle(['one', 'two', 'three', 'four']));
console.log(assertArraysEqual(middle(['one', 'two', 'three', 'four']), ['two', 'three']));
console.log(assertArraysEqual(middle(['one', 'two'], [])));
