const contactchat = document.querySelectorAll(".chat-contact");
const chatbox= document.getElementById("chat-box");
const welcome= document.getElementById("chat-intro");
contactchat.forEach(e=>{

e.addEventListener("click",()=>{
chatbox.classList.add("active");
welcome.style.display="none";
const name = e.dataset.name;
document.getElementById("current-name").textContent=name;
});
})