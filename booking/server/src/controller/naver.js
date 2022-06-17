const express = require('express');
const router = express.Router();
const sequelize = require('sequelize');
const Op = sequelize.Op;
const axios = require('axios');
const clientID = process.env.naverClientId;
const clientSecret = process.env.naverSecret;
const state = 'RANDOM_STATE';
const callbackURL = encodeURI('http://localhost:3000');
let api_url = '';

const NaverStrategy = require('passport-naver').Strategy;
const passport = require('passport');

module.exports = (app) => {
  app.use('/', router);

  router.get('/naverlogin', function (req, res) {
    passport.use(
      new NaverStrategy(
        {
          clientID,
          clientSecret,
          callbackURL,
        },
        function (accessToken, refreshToken, profile, done) {
          User.findOne(
            {
              'naver.id': profile.id,
            },
            function (err, user) {
              if (!user) {
                user = new User({
                  name: profile.displayName,
                  email: profile.emails[0].value,
                  username: profile.displayName,
                  provider: 'naver',
                  naver: profile._json,
                });
                user.save(function (err) {
                  if (err) console.log(err);
                  return done(err, user);
                });
              } else {
                return done(err, user);
              }
            }
          );
        }
      )
    );

    return res.json(user);
  });
};
