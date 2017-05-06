const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path')
const passport = require('passport')
const SteamStrategy = require('passport-steam').Strategy
const mongoose = require('mongoose')
require('dotenv').config();

//mongo connection

//es6 promises
mongoose.Promise = global.Promise;

//Connect to MongoDB
mongoose.connect("mongodb://localhost/testaroo");

mongoose.connection.once('open', function(){
    console.log('Connection has been made, now make fireworks');
  }).on('error', function(err) {
    console.log('Connection error:', err);
  })

const User = require('./server/models/User.model')

// Middlewares
const bodyParser = require('body-parser')

// Use Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('dist'))
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

//passport
passport.use(new SteamStrategy({
    returnURL: 'http://localhost:3000/auth/steam/return',
    realm: 'http://localhost:3000/',
    stateless: true,
    provider: 'http://steamcommunity.com/openid',
    apiKey: process.env.STEAM_API_KEY
  },
  function(identifier, profile, done) {
    console.log(identifier, "ident");
    console.log(profile, "profile");
    let steamId = identifier.match(/\d+$/)[0]
    console.log(steamId);
    User.findOne({ steamID: steamId }, function (err, user) {
     return done(err, user);
   });
  }
));


app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname + '/dist/app/index.html'))
})

app.get('/auth/steam',
  passport.authenticate('steam'),
  function(req, res) {
    // The request will be redirected to Steam for authentication, so
    // this function will not be called.
  });

app.get('/auth/steam/return',
  passport.authenticate('steam', {
    successRedirect: '/',
    failureRedirect: '/',
    session: true
  }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

app.listen(port, function () {
  console.log('hello from', port);
});

module.exports = app;
