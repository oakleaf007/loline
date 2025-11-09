const profilebtn= document.getElementById("profile");

const profilebox = document.querySelector(".profile-details");
profilebtn.addEventListener("click",()=>{

    profilebox.classList.toggle("active");
})