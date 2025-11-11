const contactchat = document.querySelectorAll(".chat-contact");
const chatbox= document.getElementById("chat-box");
const welcome= document.getElementById("chat-intro");

const setting = document.getElementById("setting");
const setting2 = document.getElementById("setting2");
const options = document.querySelector(".options");

// const options2 = document.querySelector(".nav-panel");

const list = document.getElementById("list");
const screenSize = window.matchMedia('(max-width:540px)');


const btn = document.getElementById("back");

const ham2 = document.getElementById("ham");

const menu2 =document.querySelector(".menu");
// ham.addEventListener("click",()=>{
//     ham.classList.toggle('active');
// menu.classList.toggle("active");
// })

const contactMenu = document.querySelector(".contact-options");
const helpMenu = document.querySelector(".help-options");

const chatBtn = document.getElementById("chat-btn");
const chatBtn2 = document.getElementById("chat-btn2");

chatBtn.addEventListener("click",async()=>{
options.classList.remove("active");
 profilebox.classList.remove("active");
  contactMenu.classList.remove('active');
   helpMenu.classList.remove('active');
});
chatBtn2.addEventListener("click",async()=>{
options.classList.remove("active");
 profilebox.classList.remove("active");
  contactMenu.classList.remove('active');
   helpMenu.classList.remove('active');
});
if(btn){
btn.addEventListener("click",async()=>{

    chatbox.classList.remove("active");
    list.style.display="flex";
    chatOpen=false; 
})

}

setting.addEventListener("click", async()=>{
options.classList.toggle("active");
 profilebox.classList.remove("active");
  contactMenu.classList.remove('active');
   helpMenu.classList.remove('active');

})

setting2.addEventListener("click",async()=>{
options.classList.toggle("active");
menu.classList.remove('active');
ham2.classList.toggle('active');
 profilebox.classList.remove("active");
  contactMenu.classList.remove('active');

});
const closebtn = document.querySelectorAll(".close");

closebtn.forEach(btn => {

btn.addEventListener("click",async()=>{
    options.classList.remove('active');
    contactMenu.classList.remove('active');
    helpMenu.classList.remove('active');
});
})



document.getElementById("contact-btn").addEventListener("click",()=>{
contactMenu.classList.toggle("active");
options.classList.remove("active");



})
document.getElementById("contact-btn2").addEventListener("click",()=>{
contactMenu.classList.toggle("active");
options.classList.remove("active");
menu.classList.remove('active');
ham2.classList.toggle('active');
 profilebox.classList.remove("active");



})


document.getElementById("help-btn").addEventListener("click",()=>{
contactMenu.classList.remove("active");
options.classList.remove("active");
helpMenu.classList.toggle("active");



})
document.getElementById("help-btn2").addEventListener("click",()=>{
contactMenu.classList.remove("active");
options.classList.remove("active");
helpMenu.classList.toggle("active");
menu.classList.remove('active');
ham2.classList.toggle('active');
 profilebox.classList.remove("active");


})











// setting2.addEventListener("click",async()=>{
// options2.classList.toggle("active");
// menu.classList.remove('active');
// ham2.classList.toggle('active');

// })


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
    // options2.classList.remove("active");
}

}


screenSize.addEventListener("change", screenLayout);

screenLayout();



