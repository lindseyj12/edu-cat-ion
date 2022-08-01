// Write code to create a function that accepts a string and returns the string in camelCase

var camelCase = function(str) {
  // result needs to be let because data is mutating
  let result = '';
  // split the str on space to get words
  const words = str.toLowerCase().split(' ');

  // loop through words 
  for (let i = 0; i < words.length; i++) {

    // each iteration is one word
    const word = words[i];
    // split on nothing to get letters of word
    const letters = word.split('');

    // if first letter is after the first word first letter
    if (i > 0) {
      // make first letter upperCase 
      letters[0] = letters[0].toUpperCase();
    }

    // add/concat the letters, join on nothing to process each letter.
    result += letters.join('');
  }
  // return the result from the function.
  return result;
};
