// const skip =document.getElementById("skipbtn");
const login = document.getElementById("login-screen");


// const skip2 =document.getElementById("skipbtn2");
// skip2.addEventListener("click", async()=>{
// document.getElementById("main").style.display="none";
// login.style.display="flex";

// })


// document.getElementById("form").addEventListener("submit", function(e){
//     e.preventDefault();

//     document.getElementById("main").style.display="flex";
// login.style.display="none";
// })

const passField = document.getElementById("password");

document.querySelector(".check").addEventListener("change",function(){
    if(this.checked){
        passField.type ="text";

    }else{
        passField.type="password";
    }
});

const modeToggle= document.getElementById("register");
let mode="signin";



modeToggle.addEventListener("click",function(){
      msg.textContent="";
if(mode==="signin"){
    document.getElementById("confirm-password").style.display="block";
    modeToggle.textContent="Login";
    mode="signup";
   
    
}
else{

      document.getElementById("confirm-password").style.display="none";
      modeToggle.textContent="Register";
       mode="signin";
      
       

}
});




