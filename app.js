var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));

app.get('/prospectlist', function (req, res){
  console.log("GET request received");

  prospect1 = {
    firstname: 'Tony',
    lastname: 'Blair',
    mobile:'44 20 7925 0918',
    streetaddress:'10 Downing St',
    city: 'London',
    postalcode: 'SW1A 2AA',
    email: 'tonyblair@uk.gov',
    qualify: 'Hot'
  };
  prospect2 = {
    firstname: 'Sherlock',
    lastname: 'Holmes',
    mobile: '55 21 3245 0113',
    streetaddress: '221b Baker Street',
    city: 'London',
    email: 'sherlock@detective.co.uk',
    qualify: 'Most Likely to Buy'
  };

  var prospectlist = [prospect1, prospect2];
  res.json(prospectlist);
});

app.set('port', (process.env.PORT || 4444));

app.listen(app.get('port'), function() {
  console.log("Listening on port 4444");
});
