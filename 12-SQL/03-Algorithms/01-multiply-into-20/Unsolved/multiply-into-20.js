// check if any two numbers in an arr multiply to 20
const multiplyInto20 = function(arr) {
  // create holder obj for arr chars
  const numMap = {};

  // loop through arr
  for (let i = 0; i < arr.length; i++) {
    // keep track of current number
    let currentNum = arr[i];

    // create target number(20) divided by currentNum
    // same as checking the product of chars
    let targetNum = 20 / currentNum;

    // if the number map contains (20/currentNum), return true
    if (numMap[targetNum]) {
      return true;
    }
    // if no match is found this iteration, iterate again
    numMap[currentNum] = true;
  };
  // if no match is found, return false
  return false;
};
