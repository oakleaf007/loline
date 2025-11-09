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
    chatOpen=false;
})

}



 contactchat.forEach(e=>{

e.addEventListener("click",()=>{
chatbox.classList.add("active");
chatOpen=true;
welcome.style.display="none";
const name = e.dataset.name;

document.getElementById("current-name").textContent=name;


screenLayout();
});
});

let chatOpen = false;


function screenLayout(){
    if(chatOpen && screenSize.matches){
list.style.display="none";
}else {
    list.style.display="flex";
}

}


screenSize.addEventListener("change", screenLayout);

screenLayout();



