// Write a function that takes two strings and returns true if every word found in the second string is present in the first string. You will be checking for both words and their frequency. Assume you'll need to worry about casing, but the strings won't contain any punctuation. Assume neither string will be empty

var concertFlyer = function (magazine, flyer) {
  // create obj to map magazine chars
  const magazineMap = {};

  // split magazine on ' ' to get words
  const magWords = magazine.split(' ');

  // loop through split magazine
  for (let i = 0; i < magWords.length; i++) {
    // keep track of currentWord
    let currentWord = magWords[i];
    
    // add words to obj map
    magazineMap[currentWord] = true;
  };
  
  // split flyer on ' ' to get words
  const flyerWords = flyer.split(' ');
  // loop through split flyer
  for (let i = 0; i < flyerWords.length; i++) {
    let currentWord = flyerWords[i];

    // if obj is missing a word
    if (!magazineMap[currentWord]) {
      // return false
      return false;
    }
    // else return true
  } return true;
};

// FUTURE SELF: 2/13/2022 - Got this one on the first try as well. I had a missing 'i' in the first split() call and an added 's' in some random place. Still feeling really great after the algorithms from yesterday. I understand the idea of OOP in these exercises.