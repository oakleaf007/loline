const socket = io(window.location.origin);

if(userInfo){
   socket.emit("join", userInfo._id);
}


function sendMessage(msgText,receiverId){
    socket.emit("send_message", {
        text: msgText,
        userName: userInfo.name,
        from:{
            _id: userInfo._id,

        },

        to: receiverId,
        time: Date.now()
    })
}


socket.on("receive_message", (data)=> {
   const chatDiv = document.getElementById(`chat-${data.from._id}`);
  if (!chatDiv) return;

  addMsg2(data.text, chatDiv);
});


function addMsg2(text, chatDiv){
    const div = document.createElement("div");
    div.className=`allmsg usermsg`;
     div.textContent = text;
    const container = chatDiv.querySelector(".text-container");
  if (!container) return;
      container.append(div);
 autoScrollBottom(container)
}
function recieveMsg2(text,chatDiv){
 const div = document.createElement("div");
    div.className=`allmsg botmsg`;
     div.textContent = text;
    const container = chatDiv.querySelector(".text-container");
  if (!container) return;
      container.append(div);
 autoScrollBottom(container);
      
}




// function recieveMsg2(text){
//     const div = document.createElement("div");
//     div.className="allmsg botmsg";
//      div.textContent = text;
//       activeDiv.querySelector(".text-container").append(div);
    
//       autoScroll();
      
// }


document.addEventListener("click", (e) => {
  const sendBtn = e.target.closest(".send2");
  if (!sendBtn) return;

  const chatDiv = sendBtn.closest(".chat-window");
  if (!chatDiv) return;

  const input = chatDiv.querySelector(".msginput2");
  const msgText = input.value.trim();
  if (!msgText) return;

  recieveMsg2(msgText, chatDiv);
  sendMessage(msgText, receiverId);
  input.value = "";
});



function autoScrollBottom(container) {
  container.scrollTop = container.scrollHeight;
}


const sendbtn = document.querySelector(".send")
sendbtn.addEventListener("click",async()=>{

const msgText = document.querySelector(".msginput").value.trim();


if(!msgText){
    return;
}


addMsg(msgText);

if(activeChat==="Groq Groq"){
   
    setTimeout(()=>chatbot(msgText,userInfo._id),2);
  
}


document.querySelector(".msginput").value = "";
});

