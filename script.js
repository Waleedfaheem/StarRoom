// ============================
// StarRoom Login System
// ============================


// Get Elements

const emailInput = document.getElementById("email");

const passwordInput = document.getElementById("password");

const loginBtn = document.getElementById("loginBtn");

const googleLoginBtn = document.getElementById("googleLoginBtn");

const facebookLoginBtn = document.getElementById("facebookLoginBtn");


// ============================
// Email Password Login
// ============================

loginBtn.addEventListener("click",()=>{


const email = emailInput.value;

const password = passwordInput.value;


if(email === "" || password === ""){

alert("Please enter email and password");

return;

}


auth.signInWithEmailAndPassword(email,password)

.then((userCredential)=>{


console.log("Login Success");

window.location.href="dashboard.html";


})

.catch((error)=>{


alert(error.message);


});


});


// ============================
// Google Login
// ============================

googleLoginBtn.addEventListener("click",()=>{


googleSignIn();


});


// ============================
// Facebook Login
// ============================

facebookLoginBtn.addEventListener("click",()=>{


facebookSignIn();


});
// ============================
// Create User Profile
// ============================

function createUserProfile(user){


const userData = {

uid:user.uid,

name:user.displayName || "StarRoom User",

email:user.email,

photo:user.photoURL || "assets/profile.png",

coins:0,

points:0,

vip:"Free",

createdAt:new Date().toISOString()

};


// Save User Data

database.ref("users/" + user.uid)

.set(userData)

.then(()=>{


console.log("Profile Created Successfully");


});


}


// ============================
// Check Login User
// ============================

auth.onAuthStateChanged((user)=>{


if(user){


console.log("Active User:",user.email);


// Create Profile If New User

database.ref("users/" + user.uid)

.once("value")

.then((snapshot)=>{


if(!snapshot.exists()){


createUserProfile(user);


}


});


}


});


// ============================
// Loading System
// ============================

function showLoading(){


const loading = document.getElementById("loadingScreen");


if(loading){

loading.style.display="flex";

}


}


function hideLoading(){


const loading = document.getElementById("loadingScreen");


if(loading){

loading.style.display="none";

}


}// ============================
// Forgot Password
// ============================

const forgotPassword = document.getElementById("forgotPassword");


if(forgotPassword){


forgotPassword.addEventListener("click",(e)=>{


e.preventDefault();


const email = emailInput.value;


if(email === ""){


alert("Enter your email first");


return;


}


auth.sendPasswordResetEmail(email)

.then(()=>{


alert("Password reset email sent");


})

.catch((error)=>{


alert(error.message);


});


});


}


// ============================
// Register Link
// ============================

const registerLink = document.getElementById("registerLink");


if(registerLink){


registerLink.addEventListener("click",()=>{


window.location.href="register.html";


});


}


// ============================
// Logout Function
// ============================

function logout(){


auth.signOut()

.then(()=>{


window.location.href="index.html";


})

.catch((error)=>{


alert(error.message);


});


}


// ============================
// Firebase Connected
// ============================

console.log("✅ StarRoom Login System Ready");
