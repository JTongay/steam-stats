const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path')

// Middlewares
const bodyParser = require('body-parser')

// Use Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname + 'dist')))

app.get('/', (req, res)=>{
  res.sendFile('app/index.html')
})

app.listen(port, function () {
  console.log('hello from', port);
});

module.exports = app;
