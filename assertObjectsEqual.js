const eqObjects = require('./eqObjects');


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  (eqObjects(inspect(actual), inspect(expected))) ? console.log(`✅✅✅  Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`) : console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

module.exports = assertObjectsEqual;


console.log(assertObjectsEqual({ name: 'Gabi'}, { name: 'Gabi'}));