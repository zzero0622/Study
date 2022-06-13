const path = require('path');
const storage = path.join(__dirname, '../../../db.sqlite');

//! logging: false 추가하면 콘솔에 뜨는 시퀄라이즈에서 작업하는 쿼리 로그를 안 보이게 할 수 있다!!

module.exports = {
  development: {
    dialect: 'sqlite',
    storage,
    logging: false,
  },
  test: {
    dialect: 'sqlite',
    storage: ':memory',
  },
  production: {
    use_env_variable: 'DB_CONNECTION_STRING',
    dialect: 'postgres',
    logging: false,
  },
};
