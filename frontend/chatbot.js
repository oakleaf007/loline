
const botContainer = document.querySelector(".groq-chat");

botContainer.addEventListener("click",()=>{
    chatbox.classList.add("active");
    chatOpen=true;
    welcome.style.display="none";
    botName= botContainer.dataset.name;
    document.getElementById("current-name").textContent=botName;
  

    screenLayout();

})









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
 
    console.log("Langra Penguin: ", data.reply);
}
chatbot(text);