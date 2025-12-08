 
 const userInfo = JSON.parse(localStorage.getItem("user"));
 window.addEventListener("load", async()=>{
          const userInfo = JSON.parse(localStorage.getItem("user"));
        if(userInfo){
              document.getElementById("main").style.display="flex";
            login.style.display="none";
           
        
        document.getElementById("uname").textContent=userInfo.name;
        document.getElementById("uname2").textContent=userInfo.name;
        document.getElementById("mail").textContent=userInfo.email;
        }
        })
        