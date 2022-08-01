// Write a function that takes an array and a positive integer and "rotates" the array to the left by the integer
// Modify the original array rather than returning a new one
// There is no need to return from this function

const leftRotation = (arr, positions) => {
  // if given an empty arr
  if (arr.length === 0) {
    // return without modifying
    return;
  }
  // while positions is a positive integer
  while (positions > 0) {
    // shift() off the first element and assign it to a variable
    const first = arr.shift();

    // add 'first' to the end of arr
    arr.push(first);

    // decrement positions integer
    positions--;
  }
};
