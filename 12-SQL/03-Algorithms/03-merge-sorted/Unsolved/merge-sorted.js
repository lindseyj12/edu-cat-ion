// Write code to merge two sorted arrays into a new sorted array

var mergeSorted = function (arr1, arr2) {
  // create holder arr
  const answerArr = [];
  // index position holders
  let arr1Index = 0;
  let arr2Index = 0;

  // looping through both arrays
  while (arr1Index < arr1.length && arr2Index <arr2.length) {
    // keeping track of chars in arrays
    let arrNum1 = arr1[arr1Index];
    let arrNum2 = arr2[arr2Index];
    
    // if arrNum1 is smaller
    if (arrNum1 < arrNum2) {
      // add arrNum1 to answerArr
      answerArr.push(arrNum1);
      // increment arr1 index counter
      arr1Index++;
    } else {
      // add arrNum2 to answerArr
      answerArr.push(arrNum2);
      // increment arr2 index counter
      arr2Index++;
    }
  };

  // looping through the rest of arr1
  while (arr1Index < arr1.length) {
    let arr1Num = arr1[arr1Index];

    // add arrNum1 to answerArr
    answerArr.push(arr1Num);
    // increment arr1 counter
    arr1Index++
  };

  // repeat the above operation for arr2
  while (arr2Index < arr2.length) {
    let arr2Num = arr2[arr2Index];

    answerArr.push(arr2Num);
    arr2Index++
  };

  return answerArr;
};

// Psuedo code a merge sorted function as a refresher
// create empty result array
// create holder vars for the index positions of arr1 and arr2 set to 0
// while loop through both arrays < length
// vars for arr1Num and arr2Num
// if num1 < num2 
// push onto result array
// increment the index counter
// else push num2 onto result array 
// increment index counter
// while loop through arr1
// push onto result array
// increment index counter for arr1
// repeat above for arr2
// return the result array