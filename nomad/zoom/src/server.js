import http from 'http';
import WebSocket from 'ws';
import express from 'express';

const app = express();
const port = 3000;

app.set('view engine', 'pug'); //! pug 내용
app.set('views', __dirname + '/views'); //! pug 내용
app.use('/public', express.static(__dirname + '/public'));
app.get('/', (_, res) => res.render('home'));
app.get('/*', (_, res) => res.redirect('/'));

const handleListen = () => console.log(`Listening on http://localhost:${port}`); //? app.listen 핸들러 함수

const server = http.createServer(app);
const wss = new WebSocket.Server({ server }); //http 서버, ws 서버 둘 다 작동 수 있게 함

function handleConnection(socket) {
  //socket : 서버와 브라우저 사이의 연결
  console.log(socket);
}

wss.on('connection', handleConnection); //on : evenct 발생을 기다림  (connection)

app.listen(port, handleListen); //npm run dev 실행 시 함수 위 콘솔이 뜬다.
