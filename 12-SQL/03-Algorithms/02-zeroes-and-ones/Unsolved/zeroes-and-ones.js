// Write code to create a function that accepts a string containing only 0s and 1s
// Return true if there are an equal number of 0s and 1s
// Else return false

var zeroesAndOnes = function(str) {
  // create holder obj for str chars
  const strMap = {};

  // loop through str chars
  for (let i = 0; i < str.length; i++) {
    // keep track of current char
    let currentChar = str[i];
    
    
    // if char is in str 
    if (currentChar in strMap) {
      // increment count if it exists
      strMap[currentChar]++;
    } else {
      // else the value is 1 for each char
      strMap[currentChar] = 1;
    };  
    console.log(strMap);
  };
  // if the quantity of 0 and 1 is eqaul
  if (strMap[0] === strMap[1]) {
    // return true from function
    return true;
  } else {
    // return false from function
    return false;
  };
};
