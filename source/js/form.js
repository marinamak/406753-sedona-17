var form = document.querySelector(".form");
var formBtn = document.querySelector(".form__button");
var successMessage = document.querySelector(".popup--succes");
var failureMessage = document.querySelector(".popup--failure");
var required = form.querySelectorAll(".required");
var failureButton = document.querySelector(".popup__button--failure");
var successButton = document.querySelector(".popup__button--success");

formBtn.addEventListener("submit", function(evt) {
  for (var i = 0; i < required.length; i++) {
    if (required[0].value && required[1].value && required[2].value && required[3].value) {
      successMessage.classList.remove("popup-show");
      if (!failureMessage.classList.contains("popup-show")) {
        failureMessage.classList.add("popup-show");
      }
    } else {
      failureMessage.classList.remove("popup-show");
      if (!successButton.classList.contains("popup-show")) {
        successMessage.classList.add("popup-show");
      }
    }
  }
});

failureButton.addEventListener("click", function() {
  failureMessage.classList.add("popup-show");
});

successButton.addEventListener("click", function() {
  successMessage.classList.add("popup-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (!failureMessage.classList.contains("popup-show") ||
      !successButton.classList.contains("popup-show")) {
      failureMessage.classList.add("popup-show");
      successMessage.classList.add("popup-show");
    }
  }
});
