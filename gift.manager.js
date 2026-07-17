let giftId = 1;

function addGift() {

    let giftName = document.getElementById("giftName").value;
    let giftPrice = document.getElementById("giftPrice").value;
    let giftIcon = document.getElementById("giftIcon").value;

    if (giftName === "" || giftPrice === "" || giftIcon === "") {
        alert("Please fill all fields");
        return;
    }

    let table = document.getElementById("giftList");

    table.innerHTML += `
    <tr>
        <td>${giftId}</td>
        <td>${giftIcon} ${giftName}</td>
        <td>${giftPrice} Coins</td>
        <td>
            <
