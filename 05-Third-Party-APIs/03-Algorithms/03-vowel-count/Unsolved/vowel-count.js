// Write code to return the the number of vowels in `str`

var vowelCount = function(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    let currentLetter = str[i].toLowerCase();
    // longer way without using indexOf. (returns the first instance of a value or -1 if value is not present)
    // if (currentLetter === 'a' || currentLetter === 'e' || currentLetter === 'i' || currentLetter === 'o' || currentLetter === 'u' )
    // count++
    if (vowels.indexOf(currentLetter) !== -1) {
      count++
    }
  }
  // added log to test no vowel condition.
  console.log(count);
  return count;
};

vowelCount("pppp")