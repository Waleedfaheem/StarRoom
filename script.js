// ===============================
// STARROOM LOGIN SYSTEM
// script.js - Part 1
// ===============================

// Login Form
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const email = document.getElementById("email").value.trim();

    const password = document.getElementById("password").value.trim();

    if (email === "" || password === "") {

        alert("Please enter Email and Password.");

        return;

    }

    // Loading Button
    const btn = document.querySelector(".login-btn");

    btn.innerHTML = "Please Wait...";

    btn.disabled = true;

    firebase.auth().signInWithEmailAndPassword(email, password)

    .then((userCredential) => {

        alert("Login Successful!");

        window.location.href = "dashboard.html";

    })

    .catch((error) => {

        alert(error.message);

        btn.innerHTML = "LOGIN";

        btn.disabled = false;

    });

  // ===============================
// STARROOM LOGIN SYSTEM
// script.js - Part 2
// ===============================

// Register Button
const registerBtn = document.querySelector(".register-btn");

if (registerBtn) {

    registerBtn.addEventListener("click", function () {

        window.location.href = "register.html";

    });

}

// Google Login Button
const googleBtn = document.querySelector(".google-btn");

if (googleBtn) {

    googleBtn.addEventListener("click", function () {

        alert("Google Login Coming Soon...");

    });

}

// Facebook Login Button
const facebookBtn = document.querySelector(".facebook-btn");

if (facebookBtn) {

    facebookBtn.addEventListener("click", function () {

       
});// ===============================
// STARROOM LOGIN SYSTEM
// script.js - Part 3 (FINAL)
// ===============================

// Show / Hide Password
const passwordField = document.getElementById("password");

const togglePassword = document.getElementById("togglePassword");

if (togglePassword && passwordField) {

    togglePassword.addEventListener("click", function () {

        if (passwordField.type === "password") {

            passwordField.type = "text";
            togglePassword.innerHTML = "🙈";

        } else {

            passwordField.type = "password";
            togglePassword.innerHTML = "👁️";

        }

    });

}

// Enter Key Login
document.addEventListener("keydown", function(e){

    if(e.key === "Enter"){

        if(loginForm){

            loginForm.requestSubmit();

        }

    }

});

// Welcome Message
console.log("⭐ Welcome To StarRoom");

// App Version
const APP_VERSION = "1.0.0";

console.log("Version:", APP_VERSION);
