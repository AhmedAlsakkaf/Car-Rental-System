// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAJiV3GPJwOnMDltu4KY7OhLS_YKoDfsw",
  authDomain: "godrive-57495.firebaseapp.com",
  projectId: "godrive-57495",
  storageBucket: "godrive-57495",
  messagingSenderId: "1021609570703",
  appId: "1:1021609570703:web:9353a51379e758cb591bfa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById('signupForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Clear previous errors
  document.getElementById('signupNameError').textContent = '';
  document.getElementById('signupEmailError').textContent = '';
  document.getElementById('signupPasswordError').textContent = '';
  document.getElementById('signupPhoneError').textContent = '';
  document.getElementById('termsCheckError').textContent = '';

  // Get form values
  const name = document.getElementById('signupName').value.trim();
  const email = document.getElementById('signupEmail').value.trim();
  const password = document.getElementById('signupPassword').value.trim();
  const phone = document.getElementById('signupPhone').value.trim();
  const termsChecked = document.getElementById('termsCheck').checked;

  let valid = true;

  // Validate name
  if (name.length < 3) {
    document.getElementById('signupNameError').textContent = 'Full name must be at least 3 characters.';
    valid = false;
  }

  // Validate email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    document.getElementById('signupEmailError').textContent = 'Please enter a valid email address.';
    valid = false;
  }

  // Validate password
  if (password.length < 3 || password.length > 10) {
    document.getElementById('signupPasswordError').textContent = 'Password must be between 3 and 10 characters.';
    valid = false;
  }

  // Validate phone
  if (phone !== '' && !/^\d{10}$/.test(phone)) {
    document.getElementById('signupPhoneError').textContent = 'Phone number must be exactly 10 digits.';
    valid = false;
  }

  // Validate terms checkbox
  if (!termsChecked) {
    document.getElementById('termsCheckError').textContent = 'You must agree to the terms and conditions.';
    valid = false;
  }

  // Proceed with Firebase authentication if valid
  if (valid) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        alert('Account Created successfully.');
        window.location.href = "../html/checkout.html"; // Specify where the user will be signed in
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  }
});