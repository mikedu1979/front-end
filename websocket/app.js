import http from "http";
import {resolve} from "path";
import exprss from "express";
import { Server } from "socket.io";

const app=exprss();
const server=http.createServer(app);
const io= new Server(server)
app.get('/',(req,res)=>{
    res.sendFile(resolve('./')+'/index.html')
    //res.send("hello world")
})
io.on('connection',(socket)=>{
    console.log("user connection coming...")
    socket.on('disconnect',()=>{
        console.log('user disconnecting...')
    })

    //Listening to messages from the client
    socket.on('message',(msg)=>{
        //console.log("msg",msg)
        //Broadcast the message to the client
        io.emit('message',msg)

    })

})

server.listen(9020,()=>{
    console.log("listen 9020 port...")
})


