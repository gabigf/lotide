// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  (actual === expected) ? console.log(`🛑🛑🛑 Assertion Passed: ${actual} === ${expected}`) : console.log(`✅✅✅ Assertion Failed: ${actual} !== ${expected}`);
};

// TEST CODE
assertEqual("Bootcamp", "BooTcamp");
assertEqual(1, 1);