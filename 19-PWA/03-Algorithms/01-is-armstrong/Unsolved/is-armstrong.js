// Write a function that takes a positive integer and returns true if the integer is an armstrong number, else return false. To find out if a number is an armstrong number, take each individual digit and raise it to the power of the length of the entire number and add the digits. If the sum equals the original number, the number is an armstrong number

var isArmstrong = function(num) {
  // converting num into a string
  const str = String(num);

  let sum = 0;

  // loop through num in str
  for (let i = 0; i < str.length; i++) {
    // parseInt to return number from str char
    let num = parseInt(str[i]);
    console.log(num);
    
    // raise each char to the power of str.length and add that to the sum
    sum += num ** str.length;
    console.log(sum);
  };
// return the boolean of sum vs num
return sum === num;

};
