
const botContainer = document.querySelector(".groq-chat");
const botchatbox= document.getElementById("botchat-box");
let activeChat=null;
// let chatOpen = false;



botContainer.addEventListener("click",()=>{
   
    if(receiverId){
        const activeDiv = document.getElementById(`chat-${receiverId}`);
        if(activeDiv){
    activeDiv.style.display="none";
    
}
    }
     const textContainer = botchatbox.querySelector(".text-container");
     if (textContainer) textContainer.innerHTML = "";
    botchatbox.classList.add("active");
    chatOpen=true;
    welcome.style.display="none";
    activeChat= botContainer.dataset.name;
    document.querySelector(".current-name").textContent=activeChat;
      
    // console.log(userInfo._id);
    renderChat(userInfo._id, activeChat);

    screenLayout();


})

const deleteBtn=document.querySelector(".deleteChat");
    deleteBtn.addEventListener("click",()=>{
        deleteChat(userInfo._id,activeChat);
    });




function addMsg(text){
    const div = document.createElement("div");
    div.className="allmsg usermsg";
     div.textContent = text;
      document.querySelector(".text-container").append(div);
     
 autoScroll();
}

function recieveMsg(text){
    const div = document.createElement("div");
    div.className="allmsg botmsg";
     div.textContent = text;
      document.querySelector(".text-container").append(div);
    
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
            userName: userInfo.email,
            activeChat: activeChat
        })
    });

    const data = await res.json();
 
   

 
   recieveMsg(data.reply);
}

function autoScroll(){
    const container = document.querySelector('.text-container');
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

async function loadChat(userId,activeChat){
    try{
         const data = await fetch(`/api/getChat/${userId}/${activeChat}`);
         const result = await data.json();
         return result;
    }catch(err){
        console.error(err);

    }
   
    
    

}

async function renderChat(chatId, activeData){
    const container = document.querySelector('.text-container');
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
      document.querySelector(".text-container").append(div);
     
 autoScroll();
        }
        
      if(msg.contactChat){
 const div = document.createElement("div");
    div.className="allmsg botmsg";
     div.textContent = msg.contactChat;
      document.querySelector(".text-container").append(div);
      
      autoScroll();
        }
    })
}

async function deleteChat(id, activeChat){
    await fetch(`/api/clearchat/${id}/${activeChat}`,{
        method: "DELETE"
    });
    document.querySelector(".text-container").innerHTML = "";
}