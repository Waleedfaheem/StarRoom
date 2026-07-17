// StarRoom Voice Room System


let currentRoom = localStorage.getItem("currentRoom");


// Join Seat System

function joinSeat(seatNumber){

let user = localStorage.getItem("guestUser") || "Guest";


alert(
"🎤 " + user + 
" joined Seat " + seatNumber
);


localStorage.setItem(
"currentSeat",
seatNumber
);


}



// Leave Room

function leaveRoom(){

localStorage.removeItem("currentRoom");

localStorage.removeItem("currentSeat");


alert("🚪 You left the room");


window.location.href="rooms.html";

}



// Load Room Name

if(currentRoom){


let roomTitle = document.getElementById("roomName");


if(roomTitle){

roomTitle.innerHTML =
"🎤 Room: " + currentRoom;

}

}
