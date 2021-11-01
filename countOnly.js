const assertEqual = require('./assertEqual');
  

const countOnly = (allItems, itemsToCount) => {
  // Assign a variable called filteredObj to empty object
  const filteredObj = {};
  // iterate through the array and check if any of the object keys match the array values
  for (let key of allItems) {
    // If the item already exists in filteredObj, add 1 to the value of that key
    // If not, then add it to the filteredObj and assign 1 to its value
    if (itemsToCount[key]) {
      (filteredObj[key]) ? filteredObj[key] += 1 : filteredObj[key] = 1;
    }
  }
  // return filteredObj
  return filteredObj;
};


module.exports = countOnly;

// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];
  
// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
  
// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);