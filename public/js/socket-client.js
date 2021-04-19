const socket = io();

const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMessage = document.querySelector('#txtMessage');
const btnSend = document.querySelector('#btnSend');

/** on - listen information */ 
socket.on('connect', () => {
    lblOffline.style.display = 'none';
    lblOnline.style.display = 'inline';
    console.log('Connected to the server');
});

socket.on('disconnect', () => {
    lblOnline.style.display = 'none';
    lblOffline.style.display = 'inline';
    console.log('We lost connection with the server');
});

btnSend.addEventListener('click', () => {
    const message = txtMessage.value;
    const payload = {
        message,
        id: 123123123,
        date: new Date().getTime()
    }
    socket.emit('send-message', payload, (id) => {
        console.log('From server', id);
    });
});

socket.on('send-message', (payload) => {
    console.log(payload);
});
