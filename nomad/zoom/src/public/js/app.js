const socket = new WebSocket(`ws://${window.location.host}`);
//socket 서버로의 연결
socket.addEventListener('open', () => {
  console.log('Connected to Server ✅');
});

socket.addEventListener('message', (message) => {
  console.log('New message: ', message.data);
});

socket.addEventListener('close', () => {
  console.log('Disconnected to server ❌');
});

setTimeout(() => {
  socket.send('hello from the browser!');
}, 1000);
