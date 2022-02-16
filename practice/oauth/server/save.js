const cors = require('cors');
const cookieParser = require('cookie-parser');
const express = require('express');
const axios = require('axios');
const app = express();
const port = 4000;

const nunjucks = require('nunjucks');
const qs = require('qs');
const session = require('express-session');

app.use(express.json());
app.use(cookieParser());
// app.use(
//   session({
//     secret: 'aaa',
//     resave: true,
//     secure: false,
//     saveUninitialized: false,
//   })
// );
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
  redirectUri: 'http://localhost:4000/oauth/kakao/callback',
  PATH: 'https://kauth.kakao.com/oauth/authorize',
};
const kakaoAuthURL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${kakao.clientID}&redirect_uri=${kakao.redirectUri}`;

const kakaoLogin = async (req, res) => {
  response.writeHead(302, {
    Location: 'your/404/path.html',
  });
  response.end();
};

app.get('/oauth/kakao/callback', async (req, res) => {
  console.log('콜백 동작!');
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
      code: req.query.code,
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

app.get('/oauth/kakao', async (req, res) => {
  console.log('로그인 요청 들어옴!');
  kakaoLogin(req, res);
  // await axios.get(kakaoAuthURL).then(async (data) => {
  //   await axios.get('http://localhost:4000/oauth/kakao/callback').then((data) => {
  //     console.log('토큰 발급 성공');
  //     res.status(200).send('success');
  //   });
  // });
});

// POST method route
app.post('/', function (req, res) {
  res.send('POST request to the homepage');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// const express = require('express');
// const app = express();
// const nunjucks = require('nunjucks');
// const axios = require('axios');
// const qs = require('qs');
// const session = require('express-session');
// const cors = require('cors');
// app.use(
//   cors({
//     origin: true,
//     methods: ['GET', 'POST', 'OPTIONS', 'PATCH', 'DELETE'],
//     allowedHeaders: ['Content-Type', 'Authorization'],
//     credentials: true,
//   })
// );

// app.set('view engine', 'html');
// nunjucks.configure('views', {
//   express: app,
// });

// app.use(
//   session({
//     secret: 'ras',
//     resave: true,
//     secure: false,
//     saveUninitialized: false,
//   })
// ); //세션을 설정할 때 쿠키가 생성된다.&&req session의 값도 생성해준다. 어느 라우터든 req session값이 존재하게 된다.

// const kakao = {
//   clientID: 'd1caacd7aa5be0ab34aa25806f27c393',
//   clientSecret: 'mGRhzGji4Y3CHpo2zk1agyJiHY4ddCAj',
//   redirectUri: 'http://localhost:4000/oauth/kakao/callback',
//   PATH: 'https://kauth.kakao.com/oauth/authorize',
// };

// //profile account_email
// app.get('/oauth/kakao', (req, res) => {
//   const kakaoAuthURL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${kakao.clientID}&redirect_uri=${kakao.redirectUri}`;
//   res.redirect(kakaoAuthURL);
// });

// app.get('/oauth/kakao/callback', async (req, res) => {
//   //axios>>promise object
//   try {
//     //access토큰을 받기 위한 코드
//     token = await axios({
//       //token
//       method: 'POST',
//       url: 'https://kauth.kakao.com/oauth/token',
//       headers: {
//         'content-type': 'application/x-www-form-urlencoded',
//       },
//       data: qs.stringify({
//         grant_type: 'authorization_code', //특정 스트링
//         client_id: kakao.clientID,
//         client_secret: kakao.clientSecret,
//         redirectUri: kakao.redirectUri,
//         code: req.query.code, //결과값을 반환했다. 안됐다.
//       }), //객체를 string 으로 변환
//     });
//   } catch (err) {
//     res.json(err.data);
//   }
//   //access토큰을 받아서 사용자 정보를 알기 위해 쓰는 코드
//   let user;
//   try {
//     console.log(token); //access정보를 가지고 또 요청해야 정보를 가져올 수 있음.
//     user = await axios({
//       method: 'get',
//       url: 'https://kapi.kakao.com/v2/user/me',
//       headers: {
//         Authorization: `Bearer ${token.data.access_token}`,
//       }, //헤더에 내용을 보고 보내주겠다.
//     });
//   } catch (e) {
//     res.json(e.data);
//   }
//   console.log(user);

//   req.session.kakao = user.data;
//   //req.session = {['kakao'] : user.data};

//   res.send('success');
// });

// app.get('/auth/info', (req, res) => {
//   let { nickname, profile_image } = req.session.kakao.properties;
//   res.render('info', {
//     nickname,
//     profile_image,
//   });
// });

// app.get('/', (req, res) => {
//   res.render('index');
// });

// app.get(kakao.redirectUri);

// app.listen(4000, () => {
//   console.log(`server start 4000`);
// });
