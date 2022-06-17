const express = require('express');
const router = express.Router();
const sequelize = require('sequelize');
const Op = sequelize.Op;
const axios = require('axios');

const { Booking, BookingRange, Designer, Reservation, User } = require('../../db/models');

module.exports = (app) => {
  app.use('/', router);

  router.get('/booking', async (req, res) => {
    const booking = await Booking.findAll();
    return res.json(booking);
  });
};
