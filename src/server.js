import app from "./app.js";
import http from 'http';
import { Server} from 'socket.io';


const server = http.createServer(app);

const io = new Server (server, {cors: {origin: "*"}});


io.on('connection', (socket)=>{

    socket.on("join",(userId)=>{
        socket.join(userId);
        console.log("Joined: ", userId);
    });

    socket.on("send_message", (data)=>{
        console.log("Sending to: ",data.to);

        io.to(data.to).emit("receive_message",data)

    });
});



const port = process.env.PORT;

server.listen(port,"0.0.0.0", ()=>{
    
    console.log("server started at port:3000");
    
});