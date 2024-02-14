// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Toogle class active untuk search form
const SearchForm = document.querySelector(".search-form");
const SearchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  SearchForm.classList.toggle("active");
  SearchBox.focus();
  e.preventDefault();
};

// Klik diluar sidebar
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!sb.contains(e.target) && !SearchForm.contains(e.target)) {
    SearchForm.classList.remove("active");
  }
});
