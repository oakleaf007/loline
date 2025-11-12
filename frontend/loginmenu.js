// const skip =document.getElementById("skipbtn");
const login = document.getElementById("login-screen");


// const skip2 =document.getElementById("skipbtn2");
// skip2.addEventListener("click", async()=>{
// document.getElementById("main").style.display="none";
// login.style.display="flex";

// })


document.getElementById("form").addEventListener("submit", function(e){
    e.preventDefault();

    document.getElementById("main").style.display="flex";
login.style.display="none";
})