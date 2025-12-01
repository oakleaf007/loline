



document.getElementById("submit").addEventListener("click", async(e)=>{
    e.preventDefault();

    try{

    
    const email = document.getElementById("email").value.trim().toLowerCase();
    const pass = document.getElementById("password").value.trim();
    const msg= document.getElementById("msg");
    const login = document.getElementById("login-screen");
    msg.textContent="";
    msg.style.color="green";

    if(!email || !pass){
          msg.style.color="red";
           msg.textContent="Email and password required";
        return;
    }
  
    const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type" : "application/json"},
        body: JSON.stringify({email, pass})
    });

   
    const data = await res.json();

    if(data.user){

          msg.style.color="green";
     msg.textContent=data.message + "redirecting..";
    
     setTimeout(()=>{
        document.getElementById("main").style.display="flex";
        login.style.display="none";

         localStorage.setItem("user", JSON.stringify(data.user));
        let uemail = data.user.email;
        
        document.getElementById("uname").textContent=uemail.split("@")[0];
        document.getElementById("uname2").textContent=data.user.email;
        document.getElementById("mail").textContent=data.user.email;
         msg.textContent="";
     },1500)
        
    }else{
        
    msg.style.color="red";
     msg.textContent=data.message;
    }
}catch(err){
    console.error(err.message);
}


    
})