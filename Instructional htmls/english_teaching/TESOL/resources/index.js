
// Code for the menu button 
let menuToggle = document.querySelector(".toggle");

menuToggle.onclick = function() {
    menuToggle.classList.toggle("active");
}



// Code For Accordion and Its Animations
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }

    // if (panel.style.display === "block") {
    //   panel.style.display = "none";
    // } else {
    //   panel.style.display = "block";
    // }
  });
}