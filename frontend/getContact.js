
let receiverId= null;
async function getContact(){
    const res = await fetch("api/getcontact");
    const contacts = await res.json();

    receiverId=contacts[0]._id;
    console.log(receiverId);

}

 const contactBtn = document.getElementById("search-contact-btn");
 
        

         
 const optionEl = document.getElementById("options-element2");

contactBtn.addEventListener("click",async(e)=>{
    e.preventDefault();

    optionEl.innerHTML="";
    const contactName = document.getElementById("contact-input").value.trim();

    const contact = contactName.toLowerCase();
    const user = await fetch(`/api/searchcontact/${contact}`);

    const res = await user.json();
       
    if(!user.ok){
        
         const msgBox = document.createElement("div");
        msgBox.style.textAlign="center";
        const spanText = document.createElement("span");
       spanText.textContent=" No user found";
        msgBox.append(spanText);
        document.getElementById("options-element2").append(msgBox);
      
        return;
    }

    if(res.user.name == userInfo.name) {
        
         const msgBox = document.createElement("div");
        msgBox.style.textAlign="center";
        const spanText = document.createElement("span");
          spanText.textContent="Can't add self";
           msgBox.append(spanText);
        optionEl.append(msgBox);
        return;
    }else{
        
       }

       const contactList= document.getElementById("list-contact2");

       const contactDiv = contactList.cloneNode(true);

      
 contactDiv.style.display ="flex";
       contactDiv.querySelector(".span-name").textContent=res.user.name;

      
       optionEl.append(contactDiv);

       





})