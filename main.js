const input = document.querySelector(".launch__content-input");
const form = document.querySelector(".launch__content-form");
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const inputWrapper = document.querySelector(".launch__content-input-wrapper");
const previousError = form.querySelector(".launch__content-error");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = input.value.trim();

  input.classList.remove("active");
  previousError.textContent = "";

  if (value === "") {
    showError("Email cannot be empty");
  } else if (!emailPattern.test(value)) {
    showError("Please provide a valid email address");
  }
});

function showError(message) {
  input.classList.add("active");
  input.classList.add("placeholder");
  previousError.textContent = message;
}
