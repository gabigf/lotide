const middle = arr => {
  const midArray = [];
  
  if (arr.length <= 2) {
    return midArray;
  } else if (arr.length % 2 === 0) {
    midArray.push(arr[arr.length / 2 - 1], arr[arr.length / 2]);
  } else if (arr.length % 2 !== 0) {
    console.log(Math.floor(arr.length/2))
    midArray.push(arr[Math.floor(arr.length / 2)]);
  } 
  return midArray;
}


module.exports = middle;