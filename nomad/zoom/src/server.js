import express from 'express';
import WebSocket from 'ws';
import http from 'http';

const app = express();

const port = 3000;

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use('/public', express.static(__dirname + '/public'));
app.get('/', (_, res) => res.render('home'));
app.get('/*', (_, res) => res.redirect('/'));

const handleListen = () => console.log(`Listening on http://localhost:${port}`);

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', (socket) => {
  //socket = 연결된 브라우저
  console.log('Connected to Browser ✅');
  socket.on('close', () => console.log('Disconnected from Browser ❌'));
  socket.on('message', (message) => {
    console.log(message.toString()); //!.toString('utf8') 없을 땐 buffer 가 뜸
  });
  socket.send('hello');
});

server.listen(3000, handleListen);
