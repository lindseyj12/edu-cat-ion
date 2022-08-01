// Write code to create a function that accepts two arrays of numbers
// Return a new array containing the intersecting elements of the arrays

var arrayIntersection = function(arr1, arr2) {
  // create obj for num mapping
  var numMap = {};
  // create catcher arr for end result
  var result = [];

  // loop through arr1
  for (var i = 0; i < arr1.length; i++) {
    // keeping track of current num in arr1
    var num = arr1[i];

    // if the number map doesn't currently have this number
    if (numMap[num] === undefined) {
      // give this number a value of 1 in the map
      numMap[num] = 1;
    } else {
      // the number already exists in the map, increment the value
      numMap[num]++;
    }
  }

  // loop through arr2
  for (var i = 0; i < arr2.length; i++) {
    // keeping track of current num in arr2
    var num = arr2[i];

    // if the map already has this number (truthy)
    if (numMap[num]) {
      // push the num to the result arr
      result.push(num);
      // decrement the map so we can track multiple occurences of num
      numMap[num]--;
    }
  }

  // return the result out of the functional scope.
  return result;
};
