const assertEqual = function(actual, expected) {
  // console.log(actual, expected);
  (actual === expected) ? console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const findKeyByValue = (obj, val) => {
  for (let key in obj) {
    if (obj[key] === val) {
      return key;
    }
  }
  return undefined;
};


const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
  
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);