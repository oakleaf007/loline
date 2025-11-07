const ham = document.getElementById("ham");

const menu =document.querySelector(".menu");
ham.addEventListener("click",()=>{
    ham.classList.toggle('active');
menu.classList.toggle("active");
})