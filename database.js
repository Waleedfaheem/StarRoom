// StarRoom Database System


// Save New User Data

function saveUserData(uid, userData){

    database.ref("users/" + uid).set(userData)

    .then(()=>{

        console.log("User Data Saved");

    })

    .catch((error)=>{

        console.log(error);

    });

}



// Get User Data

function getUserData(uid){

    database.ref("users/" + uid).once("value")

    .then((snapshot)=>{

        let data = snapshot.val();

        console.log(data);

    });

}



// Update Coins

function updateCoins(uid, coins){

    database.ref("users/" + uid + "/coins").set(coins);

}



// Save Room Data

function saveRoom(roomId, roomData){

    database.ref("rooms/" + roomId).set(roomData);

}



// Save Gift Data

function saveGift(giftId, giftData){

    database.ref("gifts/" + giftId).set(giftData);

}
