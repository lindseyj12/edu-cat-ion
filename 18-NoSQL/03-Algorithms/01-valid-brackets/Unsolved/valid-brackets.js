// Write a function to take a string and return true if it contains valid sets of matching brackets, else return false


// *** FUTURE SELF: This function had me a little stumped becasuse it is removing the opening brackets from the stack as fast as it can hence why we are only looking at the boolean of length === 0 returned.
var validBrackets = function(str) {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    // if the character is an opening bracket
    if (char === "(" || char === "[" || char === "{") {
      // push the character onto the end of the stack
      stack.push(char);
      // continue is for skipping one iteration in a loop (start next loop after this block next iteration?)
      continue;
    };

    // if the charcter is a closing parenthesis
    if (char === ")") {
      // if the last char in stack is "("
      if (stack.pop() !== "(") {
        // return false
        return false;
      }
      // continue to the next iteration (skip the rest?)
      continue;
    };
    
    if (char === "]") {
      if (stack.pop() !== "[") {
        return false;
      }
      continue;
    };
    
    if (char === "}") {
      if (stack.pop() !== "{") {
        return false;
      }
    };
    console.log('the stack looks like: ' + stack);
  };
  
  return stack.length === 0;
};
