// Write a function that takes an array and a positive integer and "rotates" the array to the left by the integer
// Modify the original array rather than returning a new one
// There is no need to return from this function

const leftRotation = (arr, positions) => {
  // if arr.length is truthy
if (arr.length) {
  // while positions is greater than zero
  while (positions > 0) {
    // assign and remove the first element
    const firstEl = arr.shift();
    // push the removed first element to the end of the arr
    arr.push(firstEl);
    // decrement positions
    positions--;
  }
}
// if arr.length is falsy
else {
  // return without action
  return;
};

};

// alternatively we can handle the error up front with a conditional statement:
// const leftRotation = (arr, positions) => {
//   if (arr.length === 0) {
//     return
//   }
//   else {
//     while (positions > 0) {
//       const first = arr.shift();
//       arr.push(first);
//       positions--;
//     }
//   } return arr;
// }

