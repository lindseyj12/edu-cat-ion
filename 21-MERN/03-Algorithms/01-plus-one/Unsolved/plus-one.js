// Write a function that takes in an array of digits representing a non negative integer and add one to it. The digits are arranged such that the most significant digits are on the left and each element in the array contains a single digit
// Return the new array
// Solve without joining the digits array and modify the original array in place

var plusOne = function (digits) {
  if (digits.length === 0) {
    digits = [1];
    console.log(digits);
    return digits;
  }

  // pop off the last number
  let lastNum = digits.pop();
  console.log(lastNum);

  // if last number is 9, push 1 and then 0 for 10
  if (lastNum === 9) {
    digits.push(1);
    digits.push(0);
  } else {
    // add one to it
    let newLast = lastNum + 1;
    // push the last number back onto the array
    digits.push(newLast);
  }
};
