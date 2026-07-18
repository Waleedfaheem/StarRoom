function logout() {
    if (confirm("Are you sure you want to logout?")) {
        window.location.href = "admin.html";
    }
}

document.querySelectorAll(".sidebar button").forEach(button => {
    button.addEventListener("click", function () {

        const text = this.innerText;

        if (text === "User Manager") {
            alert("User Manager - Coming Soon");
        }

        if (text === "Room Manager") {
            alert("Room Manager - Coming Soon");
        }

        if (text === "Verification") {
            alert("Verification Panel - Coming Soon");
        }

        if (text === "Wallet") {
            alert("Wallet Manager - Coming Soon");
        }

        if (text === "Gift Manager") {
            alert("Gift Manager - Coming Soon");
        }

        if (text === "Analytics") {
            alert("Analytics Dashboard - Coming Soon");
        }

        if (text === "Settings") {
            alert("Settings - Coming Soon");
        }

    });
});
