const eqArrays = (arr1, arr2) => {
  for (i = 0; i < arr1.length; i++) {
    if (arr1.length !== arr2.length || arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertEqualArrays = function(actual, expected) {
  (eqArrays(actual, expected)) ? console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};


const without = (source, itemsToRemove) => {
  const filteredArr = [];

  for (let val of source) {
    if (!itemsToRemove.includes(val)) {
      filteredArr.push(val);
    }
  }
  return filteredArr;
}

console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));
console.log(assertEqualArrays(without(['a', 'b', 'C', 'd', 'a'], [1, 'D', 'a', 'c']), ['b', 'C', 'd']));