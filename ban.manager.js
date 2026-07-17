// StarRoom Ban Manager


// Ban User

function banUser(){


let userId = document.getElementById("userId").value;

let reason = document.getElementById("banReason").value;



if(userId=="" || reason==""){

alert("Enter User ID and Reason");

return;

}



database.ref("users/"+userId).update({

banned:true,

banReason:reason,

banDate:new Date().toString()

});


alert("🚫 User Banned");



//
