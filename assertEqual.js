// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  console.log(actual, expected);
  (actual === expected) ? console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};


module.exports = assertEqual;