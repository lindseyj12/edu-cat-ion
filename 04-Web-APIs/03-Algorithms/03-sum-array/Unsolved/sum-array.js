// Write code to add all the numbers in `arr` and return the total

var sumArray = function(arr) {
  // set total equal to zero (needs to be let because we are mutating)
  let total = 0;
  
  for (let i = 0; i < arr.length; i++) {
    // keep track of current num
    const currentNum = arr[i];
    // add all i of arr together
    total += currentNum;
  }

  return total;
};
