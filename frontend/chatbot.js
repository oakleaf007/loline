
const botContainer = document.querySelector(".groq-chat");

let activeChat=null;
botContainer.addEventListener("click",()=>{
    chatbox.classList.add("active");
    chatOpen=true;
    welcome.style.display="none";
    activeChat= botContainer.dataset.name;
    document.getElementById("current-name").textContent=activeChat;
  

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
    setTimeout(()=>chatbot(msgText),2);
  
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






// let text = document.getElementById("").value.trim();





let text="hello bot";

async function chatbot(text){
    const res = await fetch("/api/chatbot",{
        method: "POST",
        headers:{ "Content-Type": "application/json"},
        body: JSON.stringify({
            chat: [
                {
                    role: "user",
                     content: text
                }
            ]
        })
    });

    const data = await res.json();
 
   

 
    botMsg(data.reply);
}

function autoScroll(){
    const container = document.getElementById('text-container');
    container.scrollTop = container.scrollHeight;

}