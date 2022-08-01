// Write code to create a function that accepts an array numbers
// Return `true` if no number appears in the array more than once, else return `false`

var isUnique = function (arr) {
  // create catch obj for comparing i to
  const numMap = {};

  // loop through arr
  for (let i = 0; i < arr.length; i++) {
    // let currentNum = arr[i];

    // if arr[i] is present in numMap, return false
    if (numMap[arr[i]]) {
      return false;
    }

    // set numMap of currentNum(arr[i]) to true 
    // if it isn't true in the above if statement to continue the loop.
    //* const numMap = {
    //*    [4, 2, 67, 54, 488, 54]
    //* }
    numMap[arr[i]] = true;
  }
  // otherwise return true
  return true;
};

const arr1 = [4, 2, 67, 54, 488, 54];
console.log(isUnique(arr1));
