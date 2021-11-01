const assertArraysEqual = require('./assertArraysEqual');


const flatten = arr => {
  let flatArr = [];
  for (let val of arr) {
    if (Array.isArray(val)) {
      flatArr = flatArr.concat(flatten(val));
    } else {
      flatArr.push(val);
    }
  }
  return flatArr;
};


module.exports = flatten;

// Not the point of the exercise but v. efficient way of doing this 
// const flatten = arr => {
//   return arr.flat();
// }



// console.log(flatten([1, 2, [19, 44], 5, [61]]))
// console.log(assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1,2,3,4,5,6]));