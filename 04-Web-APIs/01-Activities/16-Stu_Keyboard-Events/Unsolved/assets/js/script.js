function keydownAction(event) {
  // x TODO: Complete keydown function
  document.querySelector("#status").innerHTML = "KEYDOWD Event";
  // Event has more than just the property of target. Here we see 'key' and 'code'
  // in use for event. Key is actually KeyboardEvent.key
  document.querySelector("#key").innerHTML = event.key;
  document.querySelector("#code").innerHTML = event.code;

}

function keyupAction() {
  document.querySelector("#status").innerHTML = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);
// X TODO: Add Event Listener for "keydown" event
document.addEventListener("keydown", keydownAction);

