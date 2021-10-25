const assertEqual = function(actual, expected) {
  (actual === expected) ? console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const words = [];

const tail = arr => arr.slice(1);

console.log(tail(words));

assertEqual(words.length, 3);


