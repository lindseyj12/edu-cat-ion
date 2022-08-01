// Write a function to take an array of integers and return the minimum number of increments required across the array to ensure that every number is unique

var minIncrement = function(nums) {
  // var for mapping nums to
  var uniqueNums = {};
  // var for increment counter
  var increments = 0;

  // loop through the nums arr
  for (var i = 0; i < nums.length; i++) {
    // while the map contains the current num
    // first iteration - map doesn't contain anything so we move past this for now
    while (uniqueNums[nums[i]] === true) {
      // increment the nums index in the while loop
      nums[i] += 1;
      // increment the counter until the num is not in the map
      increments++;
    }
    // assign all of the nums to the map as true
    uniqueNums[nums[i]] = true;
    console.log(uniqueNums);
  }
  // return to us the increment counter's value
  return increments;
};
