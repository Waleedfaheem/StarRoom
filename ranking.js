// StarRoom Ranking System


let rankingList = document.getElementById("rankingList");




// Load Ranking

function loadRanking(type="coins"){


if(!rankingList) return;



rankingList.innerHTML = "Loading...";



database.ref("users")

.once("value")

.then((snapshot)=>{



let users = [];



snapshot.forEach((child)=>{


let data = child.val();



users.push({

id:child.key,

username:data.username || data.fullName || "User",

coins:data.coins || 0,

giftsSent:data.giftsSent || 0,

vip:data.vip || "VIP 0"

});


});




// Sort Ranking


users.sort((a,b)=>{


return b[type] - a[type];


});





rankingList.innerHTML="";





users.slice(0,10).forEach((user,index)=>{



let badge="🥉";


if(index===0){

badge="👑";

}

else if(index===1){

badge="🥈";

}

else if(index===2){

badge="🥉";

}



rankingList.innerHTML += `


<div class="rank-card">


<div class="rank-number">

${index+1}

</div>



<div class="user-info">

<h3>
${user.username}
</h3>


<p>
🪙 Coins: ${user.coins}
</p>


<p>
🎁 Gifts: ${user.giftsSent}
</p>


<p>
👑 ${user.vip}
</p>


</div>



<div class="rank-badge">

${badge}

</div>



</div>


`;



});



});



}





// Default

loadRanking("coins");
