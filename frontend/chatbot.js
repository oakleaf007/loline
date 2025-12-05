
const botContainer = document.querySelector(".groq-chat");
const userDetails = JSON.parse(localStorage.getItem("user"));
let activeChat=null;
botContainer.addEventListener("click",()=>{
   


     document.getElementById("text-container").innerHTML="";
    chatbox.classList.add("active");
    chatOpen=true;
    welcome.style.display="none";
    activeChat= botContainer.dataset.name;
    document.getElementById("current-name").textContent=activeChat;
    // console.log(userDetails._id);
    renderChat(userDetails._id, activeChat);

    screenLayout();

})


const sendbtn = document.getElementById("send")
sendbtn.addEventListener("click",()=>{
const msgText = document.getElementById("msginput").value.trim();
if(!msgText){
    return;
}
addMsg(msgText);

if(activeChat==="Groq Groq"){
    setTimeout(()=>chatbot(msgText,userDetails._id),2);
  
}
document.getElementById("msginput").value = "";
});


function addMsg(text){
    const div = document.createElement("div");
    div.className="allmsg usermsg";
     div.textContent = text;
      document.getElementById("text-container").append(div);
     
 autoScroll();
}

function botMsg(text){
    const div = document.createElement("div");
    div.className="allmsg botmsg";
     div.textContent = text;
      document.getElementById("text-container").append(div);
    
      autoScroll();
      
}



async function chatbot(text, userId){
    const res = await fetch("/api/chatbot",{
        method: "POST",
        headers:{ "Content-Type": "application/json"},
        body: JSON.stringify({
            chat: [
                {
                    role: "user",
                     content: text
                }
            ],
            userId,
            botName: activeChat
        })
    });

    const data = await res.json();
 
   

 
    botMsg(data.reply);
}

function autoScroll(){
    const container = document.getElementById('text-container');
    container.scrollTop = container.scrollHeight;

}

// function saveChat(text, sender="me"){
//     if(!activeChat) return;

//     let history = JSON.parse(localStorage.getItem("chat_"+ activeChat)) || [];

//     history.push({
//         text,sender, time: Date.now()
//     });

//     localStorage.setItem("chat_" + activeChat, JSON.stringify(history));


// }

async function loadChat(id,botName){
    try{
         const data = await fetch(`/api/getChat/${id}/${botName}`);
         const result = await data.json();
         return result;
    }catch(err){
        console.error(err);

    }
   
    
    

}

async function renderChat(chatId, activeData){
    const container = document.getElementById('text-container');
    container.innerHTML="";
    let messages;
    try{
       messages = await loadChat(chatId,activeData);
    }catch(err){
        console.error("Error loading chat or empty", err);
        messages=[];
    }
    messages.forEach(msg =>{
        if(msg.userChat){
  const div = document.createElement("div");
    div.className="allmsg usermsg";
     div.textContent = msg.userChat;
      document.getElementById("text-container").append(div);
     
 autoScroll();
        }
        
      if(msg.botChat){
 const div = document.createElement("div");
    div.className="allmsg botmsg";
     div.textContent = msg.botChat;
      document.getElementById("text-container").append(div);
      
      autoScroll();
        }
    })
}