var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');



app.get('/', function(req, res) {
  res.render("index");
});

app.set('port', (process.env.PORT || 4000));

app.listen(app.get('port'), function() {
  console.log("Listening on port 4000");
});
