const socket = io(window.location.origin);

if(userDetails){
   socket.emit("join", userDetails._id);
}


function sendMessage(msgText,receiverId){
    socket.emit("send_message", {
        text: msgText,
        from: userDetails._id,
        to: receiverId,
        time: Date.now()
    })
}


socket.on("receive_message", (data)=> {

    receiverId = data.from;
    recieveMsg(data.text, data.from);
});





const sendbtn = document.getElementById("send")
sendbtn.addEventListener("click",async()=>{
const msgText = document.getElementById("msginput").value.trim();
if(!msgText){
    return;
}
addMsg(msgText);

if(activeChat==="Groq Groq"){
    setTimeout(()=>chatbot(msgText,userDetails._id),2);
  
}else{
    sendMessage(msgText,receiverId);

}


document.getElementById("msginput").value = "";
});