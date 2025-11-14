const signupForm = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");


function clearError(inputElement) {
  inputElement.classList.remove('invalid');
  inputElement.classList.remove('valid');
}


signupForm.addEventListener("submit", function (event) {
  event.preventDefault();

  clearError(nameInput);
  clearError(emailInput);
  clearError(passwordInput);
  clearError(confirmPasswordInput);

  if (!nameInput.validity.valid) {
    alert("Please enter your name.");
    nameInput.focus();
    nameInput.classList.add('invalid');
    return;
  }

  if (!emailInput.validity.valid) {
    alert('Please enter a valid email');
    emailInput.focus();
    emailInput.classList.add('invalid');
    return;
  }
  if (!passwordInput.validity.valid) {
    alert('Please enter a valid password.');
    passwordInput.focus();
    passwordInput.classList.add('invalid');
    return;
  }
  if (passwordInput.value !== confirmPasswordInput.value) {
    alert('Passwords do not match.');
    confirmPasswordInput.focus();
    confirmPasswordInput.classList.add('invalid');
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

  if (savedName) nameInput.value = savedName;
  if (savedEmail) emailInput.value = savedEmail;
  if (savedPassword) passwordInput.value = savedPassword;
  if (savedConfirmPassword) confirmPasswordInput.value = savedConfirmPassword;
}

nameInput.addEventListener('input', saveForm)
emailInput.addEventListener('input', saveForm)
passwordInput.addEventListener('input', saveForm)
confirmPasswordInput.addEventListener('input', saveForm)

nameInput.addEventListener('input', () => clearError(nameInput))
emailInput.addEventListener('input', () => clearError(emailInput))
passwordInput.addEventListener('input', () => clearError(passwordInput))
confirmPasswordInput.addEventListener('input', () => clearError(confirmPasswordInput))



