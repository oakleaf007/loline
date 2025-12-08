



async function getContact(){
    let ownerId = userInfo._id; 
    const res = await fetch(`api/getcontact/${ownerId}`);
    const contacts = await res.json();
    console.log(contacts);

    const arr = contacts.contact;

    arr.forEach(e=>{
        const div = document.querySelector("#list-contact");

    const addDiv = div.cloneNode(true);
    addDiv.className = "chat-contact";
  
 addDiv.querySelector(".span-cont").textContent=e.contactName;
 addDiv.dataset.id=e.contactId;
 addDiv.dataset.name=e.contactName;

//  const template = document.getElementById("chat-box");

//  const chatcopy = template.cloneNode(true);

//  chatcopy.id =`chat-${e.contactId}`;
//  chatcopy.style.display= "none";
//  document.getElementById("content").append(chatcopy);


    document.getElementById('list').append(addDiv);
    })
  
 

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
    localStorage.setItem("contact", JSON.stringify(res.user));
        
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
       localStorage.setItem("contact", JSON.stringify(res.user));

       optionEl.append(contactDiv);

        contactDiv.querySelector(".delete-btn").addEventListener("click",()=>{
            const allContacts =document.querySelectorAll(".chat-contact");
            let flag = false;
            for(const c of allContacts){
                if (c.dataset.name == res.user.name){
                    flag = true;
                    alert("already added");
                    return;
                    
                }
            }
            if(!flag){
                 addContact();
        optionEl.innerHTML="";
            }
       
       })

})


async function addContact(){
const res= JSON.parse(localStorage.getItem("contact"));

   const result = await fetch("/api/savecontact",{
        method: "POST",
         headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({ownerId: userInfo._id, contactId: res._id })
    })
    if (result.ok){
          const div = document.querySelector("#list-contact");

    const addDiv = div.cloneNode(true);
    addDiv.className = "chat-contact";
  
 addDiv.querySelector(".span-cont").textContent=res.name;
 addDiv.dataset.name=res.name;
 addDiv.dataset.name=res.contactName;


 
    document.getElementById('list').append(addDiv);
    } else{
        console.error("error saving contact");
    }


  
}