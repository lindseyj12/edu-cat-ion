// Write a function to take an array of integers and return the minimum number of increments required across the array to ensure that every number is unique

var minIncrement = function (nums) {
  // create var for uniqueNums
  const uniqueNums = {};
  // create var for increments
  let increments = 0;

  // loop through the nums arr
  for (let i = 0; i < nums.length; i++) {
    // while uniqueNums contains the current num
    while (uniqueNums[nums[i]]) {
      // increment the current number's value
      nums[i]++;
      // increment the increments
      increments++;
    }
    // add all nums to uniqueNums as true
    uniqueNums[nums[i]] = true;
  }
  return increments;
};
