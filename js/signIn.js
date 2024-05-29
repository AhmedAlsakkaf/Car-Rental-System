// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAJiV3GPJwOnMDltu4KY7OhLS_YKoDfsw",
  authDomain: "godrive-57495.firebaseapp.com",
  projectId: "godrive-57495",
  storageBucket: "godrive-57495.appspot.com",
  messagingSenderId: "1021609570703",
  appId: "1:1021609570703:web:9353a51379e758cb591bfa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById('signinForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Clear previous errors
  document.getElementById('signinEmailError').textContent = '';
  document.getElementById('signinPasswordError').textContent = '';

  // Get form values
  const email = document.getElementById('signinEmail').value.trim();
  const password = document.getElementById('signinPassword').value.trim();

  let valid = true;

  // Validate email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    document.getElementById('signinEmailError').textContent = 'Please enter a valid email address.';
    valid = false;
  }

  // Validate password
  if (password.length < 3 || password.length > 10) {
    document.getElementById('signinPasswordError').textContent = 'Password must be between 3 and 10 characters.';
    valid = false;
  }

  // Proceed with Firebase authentication if valid
  if (valid) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert('Logged in successfully.');
        window.location.href = "../html/checkout.html"; // Specify where the user will be redirected after sign-in
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  }
});
