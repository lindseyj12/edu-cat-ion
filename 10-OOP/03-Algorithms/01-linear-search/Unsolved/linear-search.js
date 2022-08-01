// Write code to create a function that accepts an array of numbers and a target number
// if the target number is present in the array, return its index
// else return -1
// You may not use the `indexOf`, `lastIndexOf` or `includes` methods

var linearSearch = function (arr, target) {
  // loop through array
  for (let i = 0; i < arr.length; i++) {
    // find where target === arr[i] value
    if (arr[i] === target) {
      // return the index where matched
      return i;
    }
  }
  // all other cases, return -1
  return -1;
};
