const cors = require('cors');
const cookieParser = require('cookie-parser');
const express = require('express');
const axios = require('axios');
const app = express();
const port = 4000;
const qs = require('qs');

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: true,
    methods: ['GET', 'POST', 'OPTIONS', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  })
);

app.get('/', function (req, res) {
  res.send('GET request to the homepage');
});

const kakao = {
  clientID: 'd1caacd7aa5be0ab34aa25806f27c393',
  clientSecret: 'mGRhzGji4Y3CHpo2zk1agyJiHY4ddCAj',
  redirectUri: 'http://localhost:3000/oauth/kakao/auth',
  PATH: 'https://kauth.kakao.com/oauth/authorize',
};
const kakaoAuthURL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${kakao.clientID}&redirect_uri=${kakao.redirectUri}`;

app.post('/oauth/kakao', async (req, res) => {
  console.log('콜백 동작!');
  const code = req.body.code;
  await axios({
    method: 'POST',
    url: 'https://kauth.kakao.com/oauth/token',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
    },
    data: qs.stringify({
      //객체를 string 으로 변환
      grant_type: 'authorization_code', //특정 스트링
      client_id: kakao.clientID,
      client_secret: kakao.clientSecret,
      redirectUri: kakao.redirectUri,
      code: code,
    }),
  })
    .then(async (token) => {
      await axios({
        method: 'get',
        url: 'https://kapi.kakao.com/v2/user/me',
        headers: {
          Authorization: `Bearer ${token.data.access_token}`,
        },
      })
        .then((user) => {
          console.log(user.data.id);
          res.send('success');
        })
        .catch((err) => {
          console.log('서버-유저 정보 요청 실패');
        });
    })
    .catch((err) => {
      console.log('서버-토큰 요청 실패');
    });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
