const assertArraysEqual = require('./assertArraysEqual');

const map = function(arr, callback) {
  const results = [];
  
  for (let item of arr) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;



// MAP 2 - Pythagorean theorem
const input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

const result = input.map(val => Math.sqrt(Math.pow(val.x, 2) + Math.pow(val.y, 2)));





// TEST CASES

const words = ["ground", "control", "to", "major", "tom"];
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const truthOrFalse = [true, true, false, true, false];
const results1 = map(words, word => word[0]);
console.log(results1);

console.log(assertArraysEqual(map(words, word => word.toUpperCase()), ['GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM']));
console.log(assertArraysEqual(map(nums, num => num * 2), [2,4,6,8,10,12,14,16,18]));
console.log(assertArraysEqual(map(truthOrFalse, bool => (!bool) ? true : true), [true, true, true, true, true]));


// Tests for Map 2
console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);