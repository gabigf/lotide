const assertEqual = function(actual, expected) {
    console.log(actual, expected);
    (actual === expected) ? console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  };
  

const countOnly = (allItems, itemsToCount) => {
    // Assign a variable called filteredObj to empty object
    // iterate through the object keys and compare with the array
    // Push all of the matching items into filteredObj only if they are true, the key will be the item and the value will start with 1;
    // If the item already exists in filteredObj, add 1 to the value of that key


    // return filteredObj
}

const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  
  const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
  
  assertEqual(result1["Jason"], 1);
  assertEqual(result1["Karima"], undefined);
  assertEqual(result1["Fang"], 2);
  assertEqual(result1["Agouhanna"], undefined);