// Write code to merge two sorted arrays into a new sorted array

var mergeSorted = function (arr1, arr2) {
  // create holder arr for new arr 
  var result = [];

  // create holder vars for indexes
  var idx1 = 0;
  var idx2 = 0;

  // loop length of arr1 and arr2 
  while (idx1 < arr1.length && idx2 < arr2.length) {
    // keeping track of current char in iteration
    var num1 = arr1[idx1];
    var num2 = arr2[idx2];

    // if num1 < num2 
    if (num1 < num2) {
      // add num1 to result(arr)
      result.push(num1);
      // move index counter variable up one
      idx1++;
    } else {
      // add num2 to result(arr)
      result.push(num2);
      // move index counter variable up once
      idx2++;
    }
  }
  // * note: above we have already added any 'conflicts' but we stil need to add the remaining chars from arr1 and arr2
  // loop through arr1 starting at above index position
  while (idx1 < arr1.length) {
    // create holder variable for current num
    var num1 = arr1[idx1];
    // add num1 to result(arr)
    result.push(num1);
    // move index counter up once
    idx1++;
  }
  
  // repeating the above process for arr2
  while (idx2 < arr2.length) {
    var num2 = arr2[idx2];
    result.push(num2);
    idx2++;
  }
  
  // return result arr to gobal scope
  return result;
};
