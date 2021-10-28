const eqArrays = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i] || arr1.length !== arr2.length) {
      return false;
    }
  }
  return true;
};
  
  
const eqObjects = (obj1, obj2) => {
  const arr1 = Object.keys(obj1);
  const arr2 = Object.keys(obj2);

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let val of arr1) {
    if (Array.isArray(obj1[val]) && Array.isArray(obj2[val])) {
      return eqArrays(obj1[val], obj2[val]);
    } else if (obj1[val] !== obj2[val]) {
      return false;
    }
  }
  
  return true;
};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  (eqObjects(inspect(actual), inspect(expected))) ? console.log(`✅✅✅  Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`) : console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};


console.log(assertObjectsEqual({ name: 'Gabi'}, { name: 'Gabi'}));