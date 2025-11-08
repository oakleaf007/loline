const contactchat = document.querySelectorAll(".chat-contact");
const chatbox= document.getElementById("chat-box");
const welcome= document.getElementById("chat-intro");



const list = document.getElementById("list");
const screenSize = window.matchMedia('(max-width:540px)');


const btn = document.getElementById("back");

if(btn){
btn.addEventListener("click",async()=>{

    chatbox.classList.remove("active");
    list.style.display="flex";
})

}



 contactchat.forEach(e=>{

e.addEventListener("click",()=>{
chatbox.classList.add("active");

welcome.style.display="none";
const name = e.dataset.name;

document.getElementById("current-name").textContent=name;

if(screenSize.matches){
list.style.display="none";
}else{
    list.style.display="flex";
}
});
});




