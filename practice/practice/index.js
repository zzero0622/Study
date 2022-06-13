const moment = require('moment');
let date = '20220414131445';

const now = moment(date.slice(0, 8) + ' ' + date.slice(8)).format('YYYY-MM-DD HH:mm:ss');
console.log(now);
