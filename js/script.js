window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  console.log(window.scrollY);
  if (window.scrollY > 0) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
});
