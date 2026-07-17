// StarRoom Withdraw System


// Load User Coins

auth.onAuthStateChanged((user)=>{


if(user){


database.ref("users/"+user.uid).once("value")

.then((snapshot)=>{


let data = snapshot.val();


if(document.getElementById("userCoins")){

document.getElementById("userCoins").innerHTML =
data.coins || 0;

}


});


}


});





// Submit Withdraw Request

function submitWithdraw(){


let user = auth.currentUser;


if(!user){

alert("Please Login First");

return;

}



let method = document.getElementById("method").value;

let accountName = document.getElementById("accountName").value;

let accountNumber = document.getElementById("accountNumber").value;

let amount = document.getElementById("amount").value;



if(accountName=="" || accountNumber=="" || amount==""){

alert("Please fill all details");

return;

}





database.ref("withdrawRequests").push({


userID:user.uid,

method:method,

accountName:accountName,

accountNumber:accountNumber,

amount:amount,

status:"pending",

date:new Date().toString()


})


.then(()=>{


alert("✅ Withdraw Request Submitted");


document.getElementById("accountName").value="";

document.getElementById("accountNumber").value="";

document.getElementById("amount").value="";


});


}
