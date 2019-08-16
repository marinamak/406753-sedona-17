var btnTogler = document.querySelector(".main-nav__toggle");
var navList = document.querySelector(".main-nav");

btnTogler.classList.remove("main-nav__toggle--closed");
navList.classList.add("main-nav--closed");

btnTogler.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (navList.classList.contains("main-nav--closed")) {
    navList.classList.remove("main-nav--closed");
    navList.classList.add("main-nav--opened");
  } else {
    navList.classList.add("main-nav--closed");
    navList.classList.remove("main-nav--opened");
  }
});
