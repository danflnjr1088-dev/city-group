const form = document.querySelector('form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

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

form.addEventListener('submit', function (e) {
  e.preventDefault();
  let valid = true;

  clearError(emailInput);
  clearError(passwordInput);

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
  }

  if (valid) {
    alert('Logged in successfully!');
  }
});
