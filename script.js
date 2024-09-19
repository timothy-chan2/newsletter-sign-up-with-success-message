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
  const lightTomato = getComputedStyle(document.documentElement).getPropertyValue("--light-tomato");
  emailInput.style.borderColor = tomato;
  emailInput.style.WebkitTextFillColor = tomato;
  emailInput.style.MozTextFillColor = tomato;
  emailInput.style.backgroundColor = lightTomato;
  errorMessage.style.display = "block";
};

emailInput.addEventListener("focus", e => {
  const grey = getComputedStyle(document.documentElement).getPropertyValue("--grey");
  emailInput.style.borderColor = grey;
});

form.addEventListener("submit", e => {
  e.preventDefault();
  const charcoalGrey = getComputedStyle(document.documentElement).getPropertyValue("--charcoal-grey");
  const white = getComputedStyle(document.documentElement).getPropertyValue("--white");
  const formData = emailInput.value;
  userEmail.innerHTML = formData;

  signUpForm.style.display = "none";
  successMessage.style.display = "flex";
  errorMessage.style.display = "none";
  emailInput.value = "";
  emailInput.style.WebkitTextFillColor = charcoalGrey;
  emailInput.style.MozTextFillColor = charcoalGrey;
  emailInput.style.backgroundColor = white;
});

dismiss.addEventListener("click", e => {
  successMessage.style.display = "none";
  signUpForm.style.display = "flex";
});