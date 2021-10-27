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
  


const letterPositions = function(sentence) {
  const results = {};
  for (let char in sentence) {
    if (sentence[char] === ' ') {
      results;
    } else if (results[sentence[char]]) {
      results[sentence[char]].push(char);
    } else {
      results[sentence[char]] = [char];
    }
  }
  return results;
};


const alexisMateo = letterPositions('BAM');

console.log(letterPositions('lighthouse in the house'));
console.log(assertArraysEqual(letterPositions(alexisMateo['B']), 1));