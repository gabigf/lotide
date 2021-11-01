const assertEqualArrays = require('./assertArraysEqual');


const without = (source, itemsToRemove) => {
  const filteredArr = [];

  for (let val of source) {
    if (!itemsToRemove.includes(val)) {
      filteredArr.push(val);
    }
  }
  return filteredArr;
};

module.exports = without;

// console.log(without([1, 2, 3], [1]));
// console.log(without(["1", "2", "3"], [1, 2, "3"]));
// console.log(assertEqualArrays(without(['a', 'b', 'C', 'd', 'a'], [1, 'D', 'a', 'c']), ['b', 'C', 'd']));