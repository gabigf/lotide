const assertArraysEqual = require('./assertArraysEqual');


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

module.exports = letterPositions;


const alexisMateo = letterPositions('BAM');

console.log(letterPositions('lighthouse in the house'));
console.log(assertArraysEqual(letterPositions(alexisMateo['B']), 1));