// Write code to create a function that accepts a number and returns true if the number is a perfect square, otherwise it returns false.
// You may not use the built-in Math.sqrt method

var isPerfectSquare = function(num) {
  // hint is to check if squares are a match to the value
  // I can make a list of perfect squares to check against
  // is that the best way though? . . .

  // raising num to the power of 1/2 is the same as sqaure rooting.
  let rooted = Math.pow(num, 0.5);

  // if the root of the number over 1 with no remainder
  // means it is a whole number, a square root! 
  if (rooted % 1 === 0) {
    return true;

  } else {
    return false;

  };


};