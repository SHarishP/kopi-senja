window.alert("Hellow World");
// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
const menu = document.querySelector("#menu");

// Ketika Hamburger Menu di klik

function toggleMenu() {
  navbarNav.classList.toggle("active");
}

menu.addEventListener("click", toggleMenu);

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
