// Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls, show/hide the button
window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.scrollY > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
