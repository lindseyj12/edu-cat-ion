// Write code to create a function that accepts an array of integers sorted in ascending (increasing) order and returns a new array containing the squares of each number in ascending order

var sortedSquares = function (arr) {
  // map arr and square all of the numbers
  let squaredArr = arr.map((num) => {
    return num * num;
  });

  // sort the arr with compare function
  return squaredArr.sort(function (a, b) {
    console.log(squaredArr);
    return a - b;
  }); 
};