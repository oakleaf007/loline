const contactchat = document.querySelectorAll(".chat-contact");
const chatbox= document.getElementById("chat-box");
const welcome= document.getElementById("chat-intro");

const setting = document.getElementById("setting");
const setting2 = document.getElementById("setting2");
const options = document.querySelector(".options");

const options2 = document.querySelector(".nav-panel");

const list = document.getElementById("list");
const screenSize = window.matchMedia('(max-width:540px)');


const btn = document.getElementById("back");

const ham2 = document.getElementById("ham");

const menu2 =document.querySelector(".menu");
// ham.addEventListener("click",()=>{
//     ham.classList.toggle('active');
// menu.classList.toggle("active");
// })



if(btn){
btn.addEventListener("click",async()=>{

    chatbox.classList.remove("active");
    list.style.display="flex";
    chatOpen=false; 
})

}

setting.addEventListener("click", async()=>{
options.classList.toggle("active");
})


setting2.addEventListener("click",async()=>{
options2.classList.toggle("active");
menu.classList.remove('active');
ham2.classList.toggle('active');

})


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
    options2.classList.remove("active");
}

}


screenSize.addEventListener("change", screenLayout);

screenLayout();



