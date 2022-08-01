// Write code to create a function that accepts a two-dimensional array
// Each 2D element contains either the string "X" or "O" (both capitalized)
// Return the number of times "X" appears in the 2D array

var arraySearch2D = function(arr) {
  // create counter to hold value for "X"s
  let count = 0;

  // loop through the arr
  for (let i = 0; i < arr.length; i++) {
    // create variable for length of inner arr
    const innerArrLength = arr[i].length;

    // loop through the inner arr
    for (let j = 0; j < innerArrLength; j++) {
      // create variable for inner arr chars
      const innerArrChar = arr[i][j];

      // if inner char is "X"
      if (innerArrChar === "X") {
        // increment count
        count++;
      }
    }
  }
  // return count to global for reading
  return count;
};
