const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');


const eqObjects = (obj1, obj2) => {
  const arr1 = Object.keys(obj1);
  const arr2 = Object.keys(obj2);

  if (arr1.length !== arr2.length) {
      return false
  }

  for (let val of arr1) {
    if (Array.isArray(obj1[val]) && Array.isArray(obj2[val])) {
       return eqArrays(obj1[val], obj2[val]);
    } else if(obj1[val] !== obj2[val]) {
      return false;
    }
  }
  return true;
}


module.exports = eqObjects;



const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

console.log(assertEqual(eqObjects(ab, ba), true));
console.log(assertEqual(eqObjects(ab, abc), false));

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

console.log(assertEqual(eqObjects(cd, dc), true));
console.log(assertEqual(eqObjects(cd, cd2), false));
