const assertEqual = function(actual, expected) {
  console.log(actual, expected);
    (actual === expected) ? console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = str => {
  const resultObj = {};
  for (let char of str) {
    if(char === ' ') {
        resultObj;
    } else if (resultObj[char]) {
        resultObj[char] += 1;  
    } else {
        resultObj[char] = 1
    }
  }
  return resultObj;
}

const ruPaul = countLetters('Shantay you stay');

console.log(countLetters('hello there'));
console.log(countLetters('lighthouse in the house'));
console.log(assertEqual(ruPaul['y'], 3));