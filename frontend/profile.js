const profilebtn= document.getElementById("profile");

const profilebox = document.querySelector(".profile-details");
profilebtn.addEventListener("click",()=>{

    profilebox.classList.toggle("active");

    if (profilebox.classList.contains("active")) {
       
        title.textContent = "Profile";
    } else {
       
        title.textContent = originalTitle;
    }
})