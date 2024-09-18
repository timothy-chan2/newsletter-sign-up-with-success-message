const signUpForm = document.getElementById("signUpForm");
const form = document.getElementById("emailForm");
const errorMessage = document.getElementById("error");
const emailInput = document.getElementById("email");

const successMessage = document.getElementById("successMessage");
const userEmail = document.getElementById("userEmail");
const dismiss = document.getElementById("dismiss");

emailInput.oninvalid = e => {
  e.preventDefault();
  const tomato = getComputedStyle(document.documentElement).getPropertyValue("--tomato");
  emailInput.style.borderColor = tomato;
  emailInput.style.WebkitTextFillColor = tomato;
  emailInput.style.MozTextFillColor = tomato;
  errorMessage.style.display = "block";
};

emailInput.addEventListener("focus", e => {
  const grey = getComputedStyle(document.documentElement).getPropertyValue("--grey");
  emailInput.style.borderColor = grey;
  emailInput.style.WebkitTextFillColor = grey;
  emailInput.style.MozTextFillColor = grey;
});

form.addEventListener("submit", e => {
  e.preventDefault();
  const formData = emailInput.value;
  userEmail.innerHTML = formData;

  signUpForm.style.display = "none";
  successMessage.style.display = "block";
  errorMessage.style.display = "none";
  emailInput.value = "";
});

dismiss.addEventListener("click", e => {
  successMessage.style.display = "none";
  signUpForm.style.display = "block";
});