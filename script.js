const fullnameInput = document.getElementById('fullname');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmInput = document.getElementById('confirm');
const btn = document.querySelector('.btn-primary');

function showError(input, message) {
  const field = input.parentElement;
  let error = field.querySelector('.error-msg');

  if (!error) {
    error = document.createElement('p');
    error.classList.add('error-msg');
    field.appendChild(error);
  }

  error.textContent = message;
  input.style.borderColor = 'rgba(239, 68, 68, 0.7)';
}

function clearError(input) {
  const field = input.parentElement;
  const error = field.querySelector('.error-msg');
  if (error) error.remove();
  input.style.borderColor = 'rgba(255,255,255,0.1)';
}

btn.addEventListener('click', function () {
  clearError(fullnameInput);
  clearError(emailInput);
  clearError(passwordInput);
  clearError(confirmInput);

  let valid = true;

  if (fullnameInput.value.trim() === '') {
    showError(fullnameInput, 'Full name is required');
    valid = false;
  }

  if (emailInput.value.trim() === '') {
    showError(emailInput, 'Email is required');
    valid = false;
  } else if (!emailInput.value.includes('@')) {
    showError(emailInput, 'Enter a valid email address');
    valid = false;
  }

  if (passwordInput.value.trim() === '') {
    showError(passwordInput, 'Password is required');
    valid = false;
  } else if (passwordInput.value.length < 8) {
    showError(passwordInput, 'Password must be at least 8 characters');
    valid = false;
  }

  if (confirmInput.value.trim() === '') {
    showError(confirmInput, 'Please confirm your password');
    valid = false;
  } else if (confirmInput.value !== passwordInput.value) {
    showError(confirmInput, 'Passwords do not match');
    valid = false;
  }

  if (valid) {
    alert('Account created successfully!');
  }
});
