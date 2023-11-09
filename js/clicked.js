function applyClickedStyles() {
  var element = document.querySelector("html-css");

  // Add the clicked class
  element.classList.add("clicked");

  // Listen for the animation end event
  element.addEventListener(
    "animationend",
    function () {
      // Remove the clicked class after the animation is complete
      element.classList.remove("clicked");
    },
    { once: true }
  ); // Use 'once' option to ensure the event is triggered only once
}
