var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");
var msgDiv = document.querySelector("#msg");
var userEmailSpan = document.querySelector("#user-email");
var userPasswordSpan = document.querySelector("#user-password");

renderLastRegistered();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

function renderLastRegistered() {
  // X TODO: Retrieve the last email and password and render it to the page
  // Need to set these variables to update the page content.
  var email = localStorage.getItem("email");
  var password = localStorage.getItem("password");

  // setting the page to items from localStorage.
  userEmailSpan.textContent = email;
  userPasswordSpan.textContent = password;

}

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();

  var email = document.querySelector("#email").value;
  var password = document.querySelector("#password").value;

  if (email === "") {
    displayMessage("error", "Email cannot be blank");
  } else if (password === "") {
    displayMessage("error", "Password cannot be blank");
  } else {
    displayMessage("success", "Registered successfully");

  // X TODO: Save email and password to localStorage and render the last registered user
  // Set items to olocalStorage
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);
  // Update the last registered account with the user just added.
  renderLastRegistered();
}
});
