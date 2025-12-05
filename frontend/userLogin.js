



document.getElementById("submit").addEventListener("click", async(e)=>{
    e.preventDefault();

    if(mode=="signin"){

   

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
            localStorage.setItem("user", JSON.stringify(data.user));
          msg.style.color="green";
     msg.textContent=data.message + ", redirecting..";
    
          let uemail = data.user.email;
        
        document.getElementById("uname").textContent=uemail.split("@")[0];
        document.getElementById("uname2").textContent=data.user.email;
        document.getElementById("mail").textContent=data.user.email; 
    
     setTimeout(()=>{
        document.getElementById("main").style.display="flex";
        login.style.display="none";

        
         msg.textContent="";
        
         window.location.reload();
     },1000)
        
    }else{
        
    msg.style.color="red";
     msg.textContent=data.message;
    }
}catch(err){
    console.error(err.message);
}

    }else{

try{
        const email = document.getElementById("email").value.trim().toLowerCase();
    const pass = document.getElementById("password").value.trim();
     const pass2 = document.getElementById("confirm-password").value.trim();
    const msg= document.getElementById("msg");
    const login = document.getElementById("login-screen");
    msg.textContent="";
    msg.style.color="green";

    if(!email || !pass){
          msg.style.color="red";
           msg.textContent="Email and password required";
        return;
    }
    if(pass!==pass2){
         msg.style.color="red";
        msg.textContent="Confirm password does not match";
        return;
    }
  
    const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type" : "application/json"},
        body: JSON.stringify({email, pass})
    });

   
    const data = await res.json();

    if(res.ok){

    msg.style.color="green";
     msg.textContent=data.message + ", please go to login to continue";
    
     
        
    }else{
        
    msg.style.color="red";
     msg.textContent=data.message;
    }
}catch(err){
    console.error(err.message);
}

        

    }
    
})