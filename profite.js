function editProfile(){

let name = prompt("Enter your new name:");

if(name !== null && name !== ""){
document.querySelector(".profile-card h2").innerText = name;

alert("Profile Updated Successfully");
}

}
