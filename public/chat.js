const socket = io.connect('http://localhost:3000');

const message = document.querySelector('#message');
const handle = document.querySelector('#handle');
const btn = document.querySelector('#send');
const output = document.querySelector('#output');

btn.addEventListener('click', () => {
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    });
});

socket.on('chat', (data) => {
    output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
});