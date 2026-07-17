// StarRoom Authentication System


function registerUser(email, password){

    auth.createUserWithEmailAndPassword(email, password)

    .then((userCredential)=>{

        let user = userCredential.user;

        alert("Account Created Successfully");

        console.log("User ID:", user.uid);

    })

    .catch((error)=>{

        alert(error.message);

    });

}



function loginUser(email, password){

    auth.signInWithEmailAndPassword(email, password)

    .then((userCredential)=>{

        let user = userCredential.user;

        alert("Login Successful");

        window.location.href="home.html";

    })

    .catch((error)=>{

        alert(error.message);

    });

}



function logoutUser(){

    auth.signOut()

    .then(()=>{

        window.location.href="index.html";

    });

}
