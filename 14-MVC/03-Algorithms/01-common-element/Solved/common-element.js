// Write code to create a function that accepts two arrays of numbers
// There will be one number common to both arrays
// Return the common number
// You may not use the `indexOf` or `includes` method


var commonElement = function(arrA, arrB) {
  // create obj for map of elements
  var elements = {};

  // loop through arrA
  for (var i = 0; i < arrA.length; i++) {
    // current element in iteration
    var num = arrA[i];
    // setting elements to map obj
    elements[num] = 'banana';
    // note: obj now contains characters from arrA 
    console.log(elements);
  }

  // loop through arrB
  for (var i = 0; i < arrB.length; i++) {
    // current element in iteration
    var num = arrB[i];
    console.log(elements);

    // if the obj has key and it is already set to true
    if (elements[num]) {
      // give to us the element from the function.
      return num;
    }
  }
};

// This could also be achieved using a Set data structure

// var commonElement = function(arrA, arrB) {
//   var elements = new Set();

//   for (var i = 0; i < arrA.length; i++) {
//     var num = arrA[i];
//     elements.add(num);
//   }

//   for (var i = 0; i < arrB.length; i++) {
//     var num = arrB[i];

//     if (elements.has(num)) {
//       return num;
//     }
//   }
// };
