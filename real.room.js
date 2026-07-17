// StarRoom Real Room System


let micStatus = false;

let joined = false;




// Join Room

function joinRoom(){


let user = auth.currentUser;


if(!user){

alert("Please Login First");

return;

}



joined = true;


database.ref("rooms/default/users/"+user.uid).set({

name:user.email,

online:true,

joinedAt:new Date().toString()

});


updateOnlineCount();


alert("🎤 You Joined Live Room");


}




// Leave Room

function leaveRoom(){


let user = auth.currentUser;


if(user){


database.ref("rooms/default/users/"+user.uid).remove();


}


joined=false;


updateOnlineCount();


alert("🚪 You Left Room");


}





// Mic Button

function toggleMic(){


if(!joined){

alert("First Join Room");

return;

}



micStatus = !micStatus;



if(micStatus){

alert("🎤 Microphone ON");

}else{

alert("🔇 Microphone OFF");

}


}





// Online Count

function updateOnlineCount(){


database.ref("rooms/default/users")

.once("value")

.then((snapshot)=>{


let count = snapshot.numChildren();


let box=document.getElementById("onlineCount");


if(box){

box.innerHTML=count;

}


});


}




// Room Chat

function sendRoomMessage(text){


let user=auth.currentUser;


if(!user) return;



database.ref("rooms/default/chat").push({

name:user.email,

message:text,

time:new Date().toLocaleTimeString()


});


}





// Load Room Chat

database.ref("rooms/default/chat")

.on("value",(snapshot)=>{


let chat=document.getElementById("roomChat");


if(!chat)return;


chat.innerHTML="";


snapshot.forEach((child)=>{


let data=child.val();


chat.innerHTML += `

<p>
<b>${data.name}</b>
:
${data.message}
</p>

`;


});


});
// StarRoom Voice Controls


function joinVoice(){

startVoice();

alert("🎤 Joined Voice Room");

}



function leaveVoice(){

stopVoice();

alert("🚪 Left Voice Room");

}



function micControl(){

voiceToggle();

}
