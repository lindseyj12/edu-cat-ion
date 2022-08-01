// Write code to create a function that accepts two arrays of numbers
// Return a new array containing the intersecting elements of the arrays

var arrayIntersection = function (arr1, arr2) {
  const intersectArr = arr1.filter((num) => {
    if (arr2.includes(num)) {
      return num;
    };
    
  });
  
  return intersectArr;
};
