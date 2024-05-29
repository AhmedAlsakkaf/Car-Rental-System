document.getElementById('contactForm').addEventListener('submit', function(event) {
  let isValid = true;

  // Name validation
  const name = document.getElementById('name').value;
  const nameError = document.getElementById('nameError');
  if (name.length < 3) {
    nameError.style.display = 'block';
    isValid = false;
  } else {
    nameError.style.display = 'none';
  }

  // Email validation
  const email = document.getElementById('email').value;
  const emailError = document.getElementById('emailError');
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email)) {
    emailError.style.display = 'block';
    isValid = false;
  } else {
    emailError.style.display = 'none';
  }

  // Message validation
  const message = document.getElementById('message').value;
  const messageError = document.getElementById('messageError');
  if (message.trim() === '') {
    messageError.style.display = 'block';
    isValid = false;
  } else {
    messageError.style.display = 'none';
  }

  // Prevent form submission if validation fails
  if (!isValid) {
    event.preventDefault();
  }
});