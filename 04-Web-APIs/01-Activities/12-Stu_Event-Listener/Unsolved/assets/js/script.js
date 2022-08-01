var count = 0;
var incrementEl = document.querySelector("#increment");
var decrementEl = document.querySelector("#decrement");
var countEl = document.querySelector("#count");

// display counter text on page element
function setCounterText() {
  countEl.textContent = count;
}

// TODO: Add event listener to increment button
incrementEl.addEventListener("click", function() {
  // incrememnt count variable
  count++; 
  // call function to update displayed count
  setCounterText();
}) 


// TODO: Add event listener to decrement button 
decrementEl.addEventListener("click", function() {
  // decrement count variable
  count--;
  // call function to update displayed count
  setCounterText();
}) 