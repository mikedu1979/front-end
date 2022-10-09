const express=require("express");
const app=express();
const http=require("http");
const server=http.createServer(app);
const {Server}=require("socket.io");
const io=new Server(server);

app.get("/",(req,res)=>{
   //res.send("<h1>Hello World</h1>")
    res.sendFile(__dirname+"/index.html");
})

//connect to socket
io.on("connection",(socket)=>{
    console.log("a user connected");
    socket.on("disconnect",()=>{
        console.log("user disconnected")
    });

    socket.on("chat message",(msg)=>{
       console.log("message:",msg)
       io.emit("chat message",msg)
    });

});

server.listen(9030,()=>{
    console.log("Listenning on port 9030");
});
