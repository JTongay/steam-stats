const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path')
const passport = require('passport')
const SteamStrategy = require('passport-steam').Strategy
require('dotenv').config();

// Middlewares
const bodyParser = require('body-parser')

// Use Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('dist'))

//passport
passport.use(new SteamStrategy({
    returnURL: 'http://localhost:3000/auth/steam/return',
    realm: 'http://localhost:3000/',
    provider: 'http://steamcommunity.com/openid',
    apiKey: process.env.STEAM_API_KEY
  },
  function(identifier, profile, done) {
    console.log(identifier);
    console.log(profile);
    return done(profile)
  }
));


app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname + '/dist/app/index.html'))
})

app.get('/auth/steam', passport.authenticate('steam'), (req, res)=>{

  console.log(res, "boooooooyaaaarrrrrrr");
  res.json(res)

})

app.get('/auth/steam/return',
  passport.authenticate('steam', { failureRedirect: '/' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

app.listen(port, function () {
  console.log('hello from', port);
});

module.exports = app;
