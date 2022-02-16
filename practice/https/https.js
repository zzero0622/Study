// 이제 서버를 실행한 후 https://localhost:3001 로 접속하시면 브라우저의 url 창 왼쪽에 자물쇠가 잠겨있는 HTTPS 프로토콜을 이용한다는 것을 알 수 있습니다!
// node.js https 모듈 이용
// const https = require('https');
// const fs = require('fs');

// https
//   .createServer(
//     {
//       key: fs.readFileSync('./key.pem', 'utf-8'),
//       cert: fs.readFileSync('./cert.pem', 'utf-8'),
//     },
//     function (req, res) {
//       res.write('Congrats! You made https server now :)');
//       res.end();
//     }
//   )
//   .listen(3001);

//   express.js 이용
const https = require('https');
const fs = require('fs');
const express = require('express');

const app = express();

https
  .createServer(
    {
      key: fs.readFileSync(__dirname + '/key.pem', 'utf-8'),
      cert: fs.readFileSync(__dirname + '/cert.pem', 'utf-8'),
    },
    app.use('/', (req, res) => {
      res.send('Congrats! You made https server now :)');
    })
  )
  .listen(3001);