let menuToggle = document.querySelector(".toggle");

let parentNav = document.getElementById("main_nav");

menuToggle.onclick = function() {
    menuToggle.classList.toggle("active");
}

// if (menuToggle.onclick) {
//         parentNav.style.cssText = `
//         display: flex;
//         position: fixed;
//         z-index: 1;
//         width: 100%;
//         height: 100%;
//         flex-direction: column;
//         justify-content: center;
//         align-items: center;
//         `;
// }