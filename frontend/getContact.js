
let receiverId= null;
async function getContact(){
    const res = await fetch("api/getcontact");
    const contacts = await res.json();

    receiverId=contacts[0]._id;
    console.log(receiverId);

}