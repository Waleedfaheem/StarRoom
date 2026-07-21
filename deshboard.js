// ===== StarRoom Dashboard Part 1 =====

let balance = 800;

window.onload = function () {
    updateBalance();
};

function updateBalance() {
    const balanceText = document.querySelector(".balance-card h1");
    if (balanceText) {
        balanceText.innerHTML = "Rs. " + balance;
    }
}

function deposit() {
    alert("💵 Deposit Page Coming Soon");
}

function withdraw() {
    alert("🏧 Withdraw Page Coming Soon");
}

function dailyReward() {
    balance += 900;
    updateBalance();
    alert("🎁 Congratulations! You received 900 Points.");
}

function profile() {
    alert("👤 Profile Opening...");
}

function voiceRoom() {
    alert("🎤 Voice Room Opening...");
}
// ===== StarRoom Dashboard Part 2 =====

// Deposit System
function deposit() {

    balance += 300;

    updateBalance();

    alert("✅ 300 روپے کامیابی سے جمع ہوگئے!");

}

// Withdraw System
function withdraw() {

    if (balance >= 300) {

        balance -= 300;

        updateBalance();

        alert("✅ 300 روپے کامیابی سے نکال لیے!");

    } else {

        alert("❌ آپ کے پاس کافی Balance نہیں ہے!");

    }

}

// Wallet
function wallet() {
  // ===== StarRoom Dashboard Part 3 =====

// Team
function myTeam() {
    alert("👥 My Team Coming Soon");
}

// Gifts
function gifts() {
    alert("🎁 Gift System Coming Soon");
}

// Settings
function settings() {
    alert("⚙️ Settings Coming Soon");
}

// Logout
function logout() {

    let ok = confirm("کیا آپ Logout کرنا چاہتے ہیں؟");

    if (ok) {
        window.location.href = "index.html";
    }

}
