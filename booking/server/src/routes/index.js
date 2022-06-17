const express = require('express');
const router = express.Router();
const Booking = require('../controller/Booking');
const google = require('../controller/google');
const naver = require('../controller/naver');

module.exports = (app) => {
  Booking(router);
  google(router);
  naver(router);
  return router;
};
