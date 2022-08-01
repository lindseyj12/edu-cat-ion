// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two

var productOfLargestTwo = function (arr) {
  // Find the largest and the second largest numbers in the given array.
  // create catcher for highest number(could also be null).
  let highestNum = 0;
  let secondHighestNum = 0;

  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];

    // if the currentNum is 0 is important...
    if (currentNum > highestNum || highestNum === 0) {
      // set secondHighestNum equal to highestNum
      secondHighestNum = highestNum;
      // then set highestNum to currentNum
      highestNum = currentNum;

    } else if (currentNum > secondHighestNum || secondHighestNum === 0) {
      secondHighestNum = currentNum;
    }
  }

  // Return the product of the largest and the second largest number.
  return highestNum * secondHighestNum;
};
