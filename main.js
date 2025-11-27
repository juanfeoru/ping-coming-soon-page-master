const input = document.querySelector("input");
const form = document.querySelector("form");
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const inputWrapper = document.querySelector(".wrapper");
const previousError = form.querySelector(".error");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = input.value.trim();

  input.classList.remove(
    "border-[var(--red-400)]",
    "focus:border-[var(--red-400)]"
  );
  previousError.textContent = "";

  if (value === "") {
    showError("Email cannot be empty");
  } else if (!emailPattern.test(value)) {
    showError("Please provide a valid email address");
  }
});

function showError(message) {
  input.classList.add(
    "border-[var(--red-400)]",
    "focus:border-[var(--red-400)]"
  );
  previousError.textContent = message;
}
