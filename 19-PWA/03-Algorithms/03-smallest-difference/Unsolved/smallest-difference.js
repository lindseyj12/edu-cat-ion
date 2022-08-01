// Write a function that takes in two sorted arrays and returns a pair of numbers (one from each array) with the smallest difference

var smallestDifference = function (arr1, arr2) {
  // being that the arrays are sorted, we can compare the indexdes straight across
  // create variable for difference
  let bestDiff = Infinity;
  let bestPair = [];
  let left = 0;
  let right = 0;

  // loop through arr1 and arr2
  while (left < arr1.length && right < arr2.length) {
    // keep track of current num1
    const num1 = arr1[left];
    // keep track of current num2
    const num2 = arr2[right];

    // difference is calculated by absolute value of second number minus the first number
    const currentDiff = Math.abs(num2 - num1);

    // if the value of currentDiff is less than the value of bestDiff(starts at Infinity)
    if (currentDiff < bestDiff) {
      // assign bestDiff the value of currentDiff
      bestDiff = currentDiff;
      // assign bestPair to the values of current num1 and num2
      bestPair = [num1, num2];

      // also handling if the bestDiff is still at 0
      if (bestDiff === 0) {
        // the best pair will be set to the previous best pair(starts as empty)
        return bestPair;
      };
    };
  
    // get as close as we can to an exact match using this conditional block
    // if the value of the first number is less than the second number
    if (num1 < num2) {
      // move the left index forward 
      left++;
      // and when the opposite is true
    } else {
      // move the right index forward
      right++;
    }
  };
  // ultimately, return the bestPair(array with values that are the closest)
  return bestPair;
};
