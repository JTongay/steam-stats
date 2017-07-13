const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path')
const passport = require('passport')
const SteamStrategy = require('passport-steam').Strategy
const BnetStrategy = require('passport-bnet').Strategy
let loggedInSteamUser = null
let loggedInBNetUser = null
require('dotenv').config();

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
    let steamId = identifier.match(/\d+$/)[0]
    loggedInSteamUser = profile
    return done();
  }
));

// Use the BnetStrategy within Passport.
passport.use(new BnetStrategy({
    clientID: process.env.BNET_ID,
    clientSecret: process.env.BNET_SECRET,
    scope: "wow.profile sc2.profile",
    callbackURL: "http://localhost:3000/auth/bnet/callback",
    region: "us"
}, function(accessToken, refreshToken, profile, done) {
    console.log(accessToken);
    console.log(refreshToken);
    console.log(profile);
    loggedInBNetUser = {
      accessToken: accessToken,
      refreshToken: refreshToken,
      profile: profile
    }
    return done(null, profile);
}));



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

app.get('/auth/bnet',
    passport.authenticate('bnet'),
    (req, res)=>{
      console.log(res);
      res.redirect('/')
    });

app.get('/auth/bnet/callback',
    passport.authenticate('bnet', {
      successRedirect: '/',
      failureRedirect: '/',
      session: true
    }),
    function(req, res){
        res.redirect('/');
});

app.get('/auth/bnet/checkuser', (req, res, next)=>{

  res.json(loggedInBNetUser)

})

app.get('/auth/steam/checkuser', (req, res, next)=>{

  res.json(loggedInSteamUser)

})

app.get('/*', (req, res)=>{
  res.sendFile(path.join(__dirname + '/dist/app/index.html'))
})

app.listen(port, function () {
  console.log('hello from', port);
});

module.exports = app;
