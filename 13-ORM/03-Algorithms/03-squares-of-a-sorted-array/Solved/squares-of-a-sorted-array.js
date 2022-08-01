// Write code to create a function that accepts an array of integers sorted in ascending (increasing) order and returns a new array containing the squares of each number in ascending order


// Because I went with the less efficient method, I'll comment this code.
var sortedSquares = function(arr) {
  // create new arr with the same length as the given arr
  var result = new Array(arr.length);
    
  // create index variable starting at 0
  var idx1 = 0;
  // create index 2 variable for original arr length - 1 (gets last position in arr)
  var idx2 = arr.length - 1;
  // create index 3 variable for last position in result arr
  var idx3 = result.length - 1;
  
  // loop through arr
  while (idx1 <= idx2) {
    // create variable for a left side element (position 0)
    var left = arr[idx1];
    // create variable for a right side element (last position)
    var right = arr[idx2];
    
    // if the absolute value of the left(first) is greater than the right(last)
    if (Math.abs(left) > Math.abs(right)) {
      // square the left side and add it to the end of the result arr(because it's larger than the last)
      result[idx3] = left ** 2;
      // increment the left side counter
      idx1++;
    } else {
      // square the right side of the result arr and add it to the last position
      result[idx3] = right ** 2;
      // decrement the right side counter
      idx2--;
    }
    // decrement the result counter (go to next to last position)
    idx3--;
  }
  
  // return the result out of the function scope
  return result;
};


// Alternate solution (less efficient)

// var sortedSquares = function(arr) {
//   var squares = arr.map(function(num) {
//     return num ** 2;
//   });

//   var sortedSquares = squares.sort(function(a, b) {
//     return a - b;
//   });

//   return sortedSquares;
// };
