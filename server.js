const express = require("express");
const { Server } = require("socket.io");

const app = express();

const server = require("http").createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
})

server.listen(5000, () => {
    console.log("server running")
})

io.on("connection", (socket) => {
    console.log('Connected', socket.id)

    socket.on('login', (user) => {
        console.log(user);

        socket.emit('key', ({
            username: user.name,
            id: socket.id
        }))
    })
})