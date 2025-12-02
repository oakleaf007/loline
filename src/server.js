import app from "./app.js";

const port = process.env.PORT;

app.listen(port,"0.0.0.0", ()=>{
    
    console.log("server started at port:3000");
    
});