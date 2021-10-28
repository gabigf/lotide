const assertEqual = function(actual, expected) {
  console.log(actual, expected);
  (actual === expected) ? console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const findKey = (obj, callback) => {
  for (let key in obj) {
    if (callback(obj[key])) {
      return key;
    }
  }
};



console.log(assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), 'noma'));

console.log(assertEqual(findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 14), undefined));

console.log(assertEqual(findKey({
  "Symone":             { challengeWins: 5 },
  "Vivacious":          { challengeWins: 0 },
  "Chi Chi DeVayne":    { challengeWins: 1 },
  "Naomi Smalls":       { challengeWins: 1 },
  "Bimini Bon-Boulash": { challengeWins: 3 },
  "Jinkx Monsoon":      { challengeWins: 2 }
}, x => x.challengeWins === 3), 'Bimini Bon-Boulash'));