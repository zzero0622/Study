const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const db = require('./db/models');
const router = require('./src/routes');
require('dotenv').config();

app.set('port', process.env.PORT || 5000);

var corsOptions = {
  origin: [`http://localhost:${app.get('port')}`, 'http://localhost:3000'],
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router(app));

// 개발 중에는 기존 테이블을 삭제하고 데이터베이스를 다시 동기화해야 할 수 있습니다. force: true다음 코드로 사용
db.sequelize.sync({ force: true }).then(() => {
  console.log('Drop and re-sync db.');
});

app
  .listen(app.get('port'), () => {
    console.log(`
      ################################################
      🛡️ ${process.env.NODE_ENV} / Server listening on port: ${app.get('port')} 🛡️
      ################################################
    `);
  })
  .on('error', (err) => {
    console.error(err);
    process.exit(1);
  });
