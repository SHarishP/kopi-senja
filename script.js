// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
const menu = document.querySelector("#menu");

// Fungsi untuk menambahkan class active pada hamburger menu
function toggleMenu(e) {
  navbarNav.classList.toggle("active");
  e.preventDefault();
}

//Untuk membuat hamburger menu dapat menambahkan class active
menu.addEventListener("click", toggleMenu);

//Untuk menghilangkan list menu
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Variable Class Active pada Search Bar
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
const searchBtn = document.querySelector("#search-btn");

//Fungsi untuk menambahkan class Active pada Search-Form
searchBtn.onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Untuk menghilangkan Search Form
document.addEventListener("click", function (e) {
  if (!searchBtn.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});
