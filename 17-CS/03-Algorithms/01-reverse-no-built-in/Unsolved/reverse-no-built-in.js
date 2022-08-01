// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method

const reverse = (str) => {
  let result = '';

  // loop through letters in decsending order, starting with last
  for (let i = str.length - 1; i >= 0; i--) {
    // keep track of letter
    let letter = str[i];
    // add letter (starting from last) to result str.
    result += letter;
  }
  // resturn result str
  return result;
};
