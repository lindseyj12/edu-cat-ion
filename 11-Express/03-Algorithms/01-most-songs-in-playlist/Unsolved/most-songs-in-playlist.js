// Write code to create a function that accepts an array of numbers
// Each number represents the duration of a song in minutes
// Return the maximum number of songs from the list that can fit in a 60 minute playlist

var mostSongsInPlaylist = function (arr) {
  // sort the array from low to high.
  const sortedArr = arr.sort();

  // declare limit
  const limit = 60;
  // create count var to hold num value
  let total = 0;
  // create songs var to hold index of songs
  let songs = 0;

  // loop through the sortedArr
  for (let i = 0; i < sortedArr.length; i++) {
    // create holder for current song in arr
    let currentSong = sortedArr[i];

    // if total and current song is less than 60
    if (total + currentSong <= limit) {
      // add value if i to the total
      total += currentSong;
      // increase song count (index)
      songs++;

    // if 60 is reached 
    } else {
      // return songs count (index)
      return songs;
    }
  }

  // return songs if the limit is not reached 
  return songs;
};
