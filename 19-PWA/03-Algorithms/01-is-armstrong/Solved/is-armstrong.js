// Write a function that takes a positive integer and returns true if the integer is an armstrong number, else return false. To find out if a number is an armstrong number, take each individual digit and raise it to the power of the length of the entire number and add the digits. If the sum equals the original number, the number is an armstrong number 

var isArmstrong = function(num) {
  // variable changing num into a String
  var str = String(num);
  // variable for sum of nums
  var sum = 0;

  // loop through string num
  for (var i = 0; i < str.length; i++) {
    // parsing the str[i] into an integer
    var digit = parseInt(str[i]);
    // add the int raised to the length to the sum cariable
    sum += digit ** str.length;
  }

  // return the boolean value for the sum compared to num 
  return sum === num;
};
