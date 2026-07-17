// StarRoom WebRTC Voice System


let localStream;

let peerConnections = {};

let micEnabled = false;



// Start Microphone

async function startVoice(){


try{


localStream = await navigator.mediaDevices.getUserMedia({

audio:true

});


micEnabled = true;


console.log("🎤 Microphone Started");


alert("🎤 Voice Started");


}


catch(error){


alert("Microphone Permission Denied");


console.log(error);


}


}





// Stop Microphone

function stopVoice(){


if(localStream){


let tracks = localStream.getTracks();


tracks.forEach(track=>{


track.stop();


});


}



micEnabled=false;


alert("🔇 Voice Stopped");


}





// Toggle Mic

function voiceToggle(){


if(micEnabled){

stopVoice();

}else{

startVoice();

}


}





// Create Peer Connection

function createPeer(userID){


let pc = new RTCPeerConnection(voiceConfig);


if(localStream){


localStream.getTracks().forEach(track=>{


pc.addTrack(track,localStream);


});


}



pc.ontrack =
