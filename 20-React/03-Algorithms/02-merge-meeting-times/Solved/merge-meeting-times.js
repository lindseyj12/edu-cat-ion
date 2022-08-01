// Write a function that takes in a 2D array of meeting times, where each sub array contains 2 integers representing a meeting start and end time. Return a new 2D array such that overlapping meeting blocks are condensed into combined meeting blocks

var mergeMeetingTimes = function (arr) {
  // make a copy of the arr and stringify
  var arrStrCopy = JSON.stringify(arr);

  console.log(arrStrCopy);
  // parse the str arr into a JSON format, popping sub arrs into their own properties
  var arrParseCopy = JSON.parse(arrStrCopy);

  // sort the arr into ascending order
  var sortedArr = arrParseCopy.sort((a, b) => a[0] - b[0]);

  // create result variable set to the first element of the sorted arr(0: [num, num])
  var result = [sortedArr[0]];

  console.log(sortedArr);

  // loop through the sorted arr keys starting at index 1 for first meeting end time
  for (var i = 1; i < sortedArr.length; i++) {
    // create var for last(latest) meeting in the entry(0: on first iteration)
    var lastMeeting = result[result.length - 1];
    // create var for current meeting END TIME in iteration
    var currentMeeting = sortedArr[i];

    // if last meeting of first entry is greater than or equal to current meeting's end time
    if (lastMeeting[1] >= currentMeeting[0]) {
      // if last meeting is less than current meeting
      if (lastMeeting[1] < currentMeeting[1]) {
        // set last meeting to current meeting 
        lastMeeting[1] = currentMeeting[1];
      }
    } else {
      // push the current meeting end time onto result
      result.push(currentMeeting);
    }
    console.log(result);
  }
  // return the result sub array to us
  return result;
};
