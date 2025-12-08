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
    recieveMsg(data.text, data.from, data.userName);
});





const sendbtn = document.querySelector(".send")
sendbtn.addEventListener("click",async()=>{
const msgText = document.querySelector(".msginput").value.trim();
if(!msgText){
    return;
}
addMsg(msgText);

if(activeChat==="Groq Groq"){
    setTimeout(()=>chatbot(msgText,userInfo._id),2);
  
}else{
    sendMessage(msgText,receiverId);

}


document.querySelector(".msginput").value = "";
});


