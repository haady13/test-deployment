const express = require("express");
const app = express();
const path = require('path');
const ejs = require('ejs');
app.set('view engine', ejs);
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/test', function(req, res) {
  res.json("Hello World from server");
});

if (process.env.NODE_ENV==='production') {
  app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname,'client', 'build', 'index.html'));
  });
}


const port = 5000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));
