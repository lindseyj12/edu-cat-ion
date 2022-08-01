// Write code to return the largest number in the given array
var maxNum = function(arr) {
  // start max at first position of array
  let max = arr[0]
  
  // iterate through arr
  // start iterating on arr[1] because max has already stored arr[0]
  for (let i = 1; i < arr.length; i++) {
    let currentNum = arr[i];
    // compare numbers and store highest number in max
    if (currentNum > max) {
      max = currentNum;
    }
  }
  return max;
};
