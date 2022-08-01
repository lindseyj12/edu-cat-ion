// Write code to create a function that accepts two arrays of numbers
// There will be one number common to both arrays
// Return the common number
// You may not use the `indexOf` or `includes` method

var commonElement = function(arrA, arrB) {
  // make an obj for mapping arr
  const arrMap = {};
  
  // loop through arrA
  // map all the chars from arrA as properties on obj
  for (let i = 0; i < arrA.length; i++) {
    let currentCharA = arrA[i];

    if (currentCharA in arrMap) {
      arrMap[currentCharA]++;

    } else {
      arrMap[currentCharA] = 1;
    };
    
  };

  // map all chars from arrB as properties
  for (let i = 0; i <arrB.length; i++) {
    let currentCharB = arrB[i];

    if (currentCharB in arrMap) { 
      arrMap[currentCharB]++;

    } else {
      arrMap[currentCharB] = 1;
    };

  };

  // It seems like this approach is possible, but not worth the time investment to figure out.
  for (const [key, value] of Object.entries(arrMap)) {
    console.log(`${key}: ${value}: `);

  };

  // if arrMap has a key with the value of 2
  // return to us that key(number)

//X if arrMap[something] === 2 X
  // We don't want to pursue the logic this way because I can't check the value easily enough.
  // Instead the example used a boolean to simply keep track of the common element.
  // Perhaps for further expandability we could go with creating the key values numerically.
// return arrMap[something]
  

};

// Write code to create a function that accepts a string containing only 0s and 1s
// Return true if there are an equal number of 0s and 1s
// Else return false

// var zeroesAndOnes = function(str) {
  // create holder obj for str chars
//   const strMap = {};

  // loop through str chars
//   for (let i = 0; i < str.length; i++) {
    // keep track of current char
//     let currentChar = str[i];

    // if char is in str 
//     if (currentChar in strMap) {
      // increment count if it exists
//       strMap[currentChar]++;
//     } else {
      // else the value is 1 for each char
//       strMap[currentChar] = 1;
//     };  
//   };
  // if the quantity of 0 and 1 is eqaul
//   if (strMap[0] === strMap[1]) {
    // return true from function
//     return true;
//   } else {
    // return false from function
//     return false;
//   };
// };


// * --------------------------- SOLVED VER. 0's & 1's -----------------------------

// Write code to create a function that accepts a string containing only 0s and 1s
// Return true if there are an equal number of 0s and 1s
// Else return false

// var zeroesAndOnes = function(str) {
//   var zeroes = 0;
//   var ones = 0;

//   for (var i = 0; i < str.length; i++) {
//     var num = str[i];

//     if (num === "0") {
//       zeroes++;
//     } else if (num === "1") {
//       ones++;
//     }
//   }

//   return zeroes === ones;
// };

