import { io } from "socket.io-client";

const socket = io('http://localhost:5000');
const form = document.getElementById('form');
const chat = document.getElementById('chat');
chat.style.display = "none"

form.onsubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name').split(' ').join('_');
    console.log(name)
    socket.emit('login', ({name}))

    socket.on('key', (res) => {
        console.log(res)
        document.querySelector('.login-box').style.display = "none";
        chat.style.display = "block"
    })
}