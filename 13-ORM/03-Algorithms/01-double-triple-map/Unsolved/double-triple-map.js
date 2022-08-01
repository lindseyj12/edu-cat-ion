// Write code to create a function that accepts an array of numbers and returns a new array that corresponds to the original array


// var doubleTripleMap = function(arr) {
//   const result = [];

//   for (let i = 0; i < arr.length; i++) {
//     let currentNum = arr[i];
//     // If an element in the original array is even, the element at the same index in the new array should be double the original element
//     if (currentNum % 2 === 0) {
//       result.push(currentNum * 2);
//     } else {
//       // If an element in the original array is odd, the element at the same index of the new array should be triple the original element
//       result.push(currentNum * 3);
//     }

//   };
//   return result;
// };
// * ALT WAY USING EARLY RETURNS AND MAP FUNCTION

var doubleTripleMap = function (arr) {
  let doubleTripleArr = arr.map((num) => {
// for this method we are able to use the map method to return an array 
// with the arrow function doing the logic/math.
  if (num % 2 === 0) {
    // if num is even return num times 2
    return num * 2;
  }
  // otherwise return num times 3
  return num * 3;
  });
  // logging to see the pretty numbers
  console.log(doubleTripleArr);
  // return the arr to the lexical scope 
return doubleTripleArr;
};

// And that's all there is to this method. I'm used to doing the 'low and slow' way of declaring variables clearly
// probably so the caveman parts of my brain can keep track of them.
