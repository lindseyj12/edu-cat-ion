const peakFinder = function(nums) {

  // // if nums.length === 1
  // if (nums.length === 1) {
  //   // return nums
  //   return nums[0];
  // }

  // // loop through nums
  // for (let i = 0; i < nums.length; i++) {
  //   // keep track of currentNum
  //   const highestNum = Math.max(...nums);
  //   // keep track of leftNum
  //   const leftNum = nums [i - 1];
  //   // keep track of rightNum
  //   const rightNum = nums[i + 1];

  //   console.log(highestNum);

  //   // if currentNum > leftNum && currentNum > rightNum
  //   if (currentNum > leftNum && currentNum > rightNum) {
  //     // return currentNum
  //     return currentNum;
  //   }
   
  // }
  // *** TO FUTURE SELF: got this down to a one liner by sreturning the largest value in the array. Makes sense that the largest number is larger than any number around it...
return Math.max(...nums);


};
