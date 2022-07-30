window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");
  navbar.classList.toggle("stiky", window.scrollY > 0);
});

let toggle = document.querySelector(".toggle");
let nav = document.querySelector("nav");
toggle.addEventListener("click", function () {
  nav.classList.toggle("open");
});
