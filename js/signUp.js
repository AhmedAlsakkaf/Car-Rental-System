// Import the functions you need from the SDKs you need
// alert('something');


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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










// For the Signup:
const submit = document.getElementById('singupSubmit');
submit.addEventListener("click", function(event){
  event.preventDefault()


    
  //inputs
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      alert('Account Created successfully..')
      window.location.href = "../html/temp.html"; //You will specifiy where the user will be signed in
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
      // ..
    });


});







