// Write code to return a new arr with all of the characters in `arr` reversed.
// You may NOT use the built-in reverse method

const reverseInPlace = (arr) => {
  // keeping track of the left most element
  let left = 0;
  // keeping track of the right most element
  let right = arr.length - 1;

  do {
    // temp variable to hold the left value
    const temp = arr[left];
    // assign the right most element to the left
    arr[left] = arr[right];
    // assign the left most element to the right
    arr[right] = temp;
    
    // increment left counter
    left++;
    // decrement right counter
    right--;
  }
  // do the above while the left index is < the right index
  while (left < right);
  // return the arr
  return arr;
};

// could also be written:
// const reverseInPlace = (arr) => {
//   // keeping track of the left most element
//   let left = 0;
//   // keeping track of the right most element
//   let right = arr.length - 1;

//   while (left < right) {
//     // temp variable to hold the left value
//     const temp = arr[left];
//     // assign the right most element to the left
//     arr[left] = arr[right];
//     // assign the left most element to the right
//     arr[right] = temp;
    
//     // increment left counter
//     left++;
//     // decrement right counter
//     right--;
//   }
//   // return the arr
//   return arr;
// };
