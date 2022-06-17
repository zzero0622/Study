const express = require('express');
const router = express.Router();
const sequelize = require('sequelize');
const Op = sequelize.Op;
const { auth, calendar } = require('./google.js');

module.exports = (app) => {
  app.use('/', router);

  router.get('/auth', async (req, res) => {
    return res.send(auth());
  });

  router.get('/calendar', async (req, res) => {
    return res.send(calendar());
  });
};
