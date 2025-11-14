const signupForm = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

myForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!nameInput.validity.valid) {
    alert("Please enter your name.");
    nameInput.focus();
    return;
  }

  if (!emailInput.validity.valid) {
    alert('Please enter a valid email');
    email.focus();
    return;
  }
  if (!passwordInput.validity.valid) {
    alert('Please enter a valid password.');
    passwordInput.focus();
    return;
  }
  if (passwordInput.value !== confirmPasswordInput.value) {
    alert('Passwords do not match.');
    confirmPassword.focus();
    return;
  }


  const formData = new FormData(signupForm);
  const nameValue = formData.get("name");
  alert("Form submitted! Name: " + nameInput.value);

  signupForm.reset();
});

function saveForm() {
  sessionStorage.setItem("signup_name", nameInput.value);
  sessionStorage.setItem("signup_email", emailInput.value);
  sessionStorage.setItem("signup_password", passwordInput.value);
  sessionStorage.setItem("signup_confirmPassword", confirmPasswordInput.value);
}

function loadForm() {
  const savedName = sessionStorage.getItem("signup_name");
  const savedEmail = sessionStorage.getItem('signup_email');
  const savedPassword = sessionStorage.getItem('signup_password');
  const savedConfirmPassword = sessionStorage.getItem('signup_confirmpassword');

  if (savedName) name.value = savedName;
  if (savedEmail) email.value = savedEmail;
  if (savedPassword) password.value = savedPassword;
  if (savedConfirmPassword) confirmPassword.value = savedConfirmPassword;
}

nameInput.addEventListener('input', saveForm)
emailInput.addEventListener('input', saveForm)
passwordInput.addEventListener('input', saveForm)
confirmPasswordInput.addEventListener('input', saveForm)

signupForm.addEventListener('submit', function (event) {
  event.preventDefault();
})


