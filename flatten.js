const eqArrays = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1.length !== arr2.length || arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  (eqArrays(actual, expected)) ? console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};


const flatten = arr => {
  let flatArr = [];
  for (let val of arr) {
    if (Array.isArray(val)) {
      flatArr = flatArr.concat(flatten(val));
    } else {
      flatArr.push(val);
    }
  }
  return flatArr;
}

// Not the point of the exercise but v. efficient way of doing this 
// const flatten = arr => {
//   return arr.flat();
// }



console.log(flatten([1, 2, [19, 44], 5, [61]]))
console.log(assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1,2,3,4,5,6]));