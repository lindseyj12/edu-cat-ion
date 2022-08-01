var site1El = document.querySelector(".site1");
var site2El = document.querySelector(".site2");
var site3El = document.querySelector(".site3");

site1El.children[0].textContent = "Site 1";
site1El.children[1].setAttribute("href", "https://google.com");
site1El.children[1].children[0].setAttribute("src", "assets/images/image_1.jpg");
site1El.children[1].children[0].setAttribute("alt", "man working");
site1El.children[1].children[0].setAttribute("style", "padding:10px;");

site2El.children[0].textContent = "Site 2";
site2El.children[1].setAttribute("href", "https://twitter.com");
site2El.children[1].children[0].setAttribute("src", "assets/images/image_2.jpg");
site2El.children[1].children[0].setAttribute("alt", "group brainstorm");
site2El.children[1].children[0].setAttribute("style", "padding:10px;");

site3El.children[0].textContent = "Site 3";
site3El.children[1].setAttribute("href", "https://instagram.com");
site3El.children[1].children[0].setAttribute("src", "assets/images/image_3.jpg");
site3El.children[1].children[0].setAttribute("alt", "women working");
site3El.children[1].children[0].setAttribute("style", "padding:10px;");

// Write Your Code Below

// It's done when all the `<h4>` elements are selected and stored in a single variable.
var h4Tags = document.querySelectorAll("h4");
var h1Tags = document.querySelectorAll("h1");

// It's done when the text of each `<h4>` is set to `blue`, the font size is `30px`, and the text is `bold`.
// loop through the h4Tags and set color and size
for (let i = 0; i < h4Tags.length; i++) {
  h4Tags[i].setAttribute("style", "color:blue; font-size:30px; font-weight:bold");
}

//  It's done when the padding to the left of the title is set to `10px` and the margin is set to `0`.
// note: this isn't what they were asking for, but it does what I was trying to do.
for (let i = 0; i < h1Tags.length; i++) {
h1Tags[i].setAttribute("style", "padding-left:10px; margin:0");  
}