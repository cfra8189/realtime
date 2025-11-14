const myForm = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

myForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Stop the default form submission

  if (!nameInput.validity.valid) {
    alert("Please enter your name.");
    nameInput.focus();
    return; // Stop further processing if invalid
  }

  // If valid, process the form data
  const formData = new FormData(myForm);
  const nameValue = formData.get("name");
  alert("Form submitted! Name: " + nameValue);
  // Here you would typically send data to a server using fetch() or XMLHttpRequest
  // e.g., fetch('/submit-form', { method: 'POST', body: formData });
  myForm.reset(); // Optionally reset the form
});

function saveForm() {
  sessionStorage.setItem("signup_name", nameInput.value);
  sessionStorage.setItem("signup_email", email.value);
  sessionStorage.setItem("signup_password", password.value);
  sessionStorage.setItem("signup_confirmPassword", confirmPassword.value);
}

function loadForm() {
  const savedName = sessionStorage.getItem("signup_name");
  const savedEmail = sessionStorage.getItem('signup_email');
  const savedPassword = sessionStorage.getItem('signup_password');
  const savedConfirmPassword = sessionStorage.getItem('signup_confirm_password');

  if (savedName) nameInput.value = savedName;
  if (savedEmail) emailInput.value = savedEmail;
  if (savedPassword) passwordInput.value = savedPassword;
  if (savedConfirmPassword) confirmPasswordInput.value = savedConfirmPassword;
}

