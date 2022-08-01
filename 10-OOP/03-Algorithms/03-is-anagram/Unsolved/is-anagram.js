// Write code to create a function that accepts two strings
// Return true if the strings are anagrams of each other, otherwise return false

var isAnagram = function(strA, strB) {
  // if lengths are different, cannot be anagrams
  if (strA.length !== strB.length) {
      // return false(exit)
    return false;
  };
  
  // store characters for A and B in an object so each letter is a key value pair on the obj.
  let strAMap = {};
  let strBMap = {};
  // store length of strA (strB is the same length per line 6)
  let strLength = strA.length;

  // loop through letters in strA and strB.
  for(let i = 0; i < strLength; i++) {
    // assign each letter to a variable as we iterate.
    let letterA = strA[i];
    let letterB = strB[i];

    // strAMap[strA[i]] = (strAMap[strA[i]] || 0) + 1
    // this is saying that the count for a letter is incrementing everytime the letter is found.
    strAMap[letterA] = (strAMap[letterA] || 0) + 1;
    strBMap[letterB] = (strBMap[letterB] || 0) + 1;
  }
  
  // compare strA char count to strB char count.
  for (let key in strAMap) {
    // if the key values for each letter do not match...
    if (strAMap[key] !== strBMap[key]) {
      // return false(exit)
      return false;
    }
  }
  // if no false case has been found, isAnagram is true!
  return true;
};
