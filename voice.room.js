let micOn = false;


// Mic Button

function toggleMic(){

micOn = !micOn;


if(micOn){

alert("🎤 Microphone ON");

}else{

alert("🔇 Microphone OFF");

}

}



// Gift Button

function sendGift(){

let gifts = [
"🌹 Rose",
"🥚 Egg",
"🌸 Flower",
"⭐ Star"
];


let gift = gifts[Math.floor(Math.random()*gifts.length)];


let chatBox = document.getElementById("chatBox");


chatBox.innerHTML += 
"<p>🎁 You sent "+gift+"</p>";

}



// Chat Button

function openChat(){

let message = prompt("Write Message");


if(message){

let chatBox=document.getElementById("chatBox");


chatBox.innerHTML +=
"<p>💬 "+message+"</p>";

}

}



// Leave Room

function leaveRoom(){

alert("🚪 Leaving Room...");


window.location.href="home.html";

}
