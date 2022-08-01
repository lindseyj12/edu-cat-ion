// Write code to create a function that accepts two strings
// Return true if the second string is a substring of any permutation of the first string
// Else return false

var permutationSubstring = function(str, sub) {
  // create obj to map str to
  const strMap = {};
 
  // loop through chars in str
 for (let i = 0; i < str.length; i++) {
   // current char tracking
   let strChar = str[i];
   
   // add chars to obj map
   strMap[strChar] = true;
   console.log(strMap);
 };

  // loop through chars in sub
  for (let i = 0; i < sub.length; i++) {
    // current char tracking
    let subChar = sub[i];

    // if current char is NOT in obj map
    if (!strMap[subChar]) {
      return false;
    }
    // else return true
  } return true;
};

// FUTURE SELF: the date is 2/13/2022. Got this algorithm to pass all tests first try no research. I'm sure this will seem very small someday, but today it is big for me.