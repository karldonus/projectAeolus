var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var path = require('path');
var mongojs = require('mongojs');
var db = mongojs('prospectlist', ['prospectlist']);
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/prospectlist', function (req, res){
  console.log("GET request received");

db.prospectlist.find(function (err, docs) {
  console.log(docs);
  res.json(docs);
  });
});

app.post('/prospectlist', function (req, res){
  console.log(req.body);
  db.prospectlist.insert(req.body, function(err, doc){
    res.json(doc);
  });
});

app.delete('/prospectlist/:id', function (req, res){
  var id = req.params.id;
  console.log(id);
  db.prospectlist.remove({_id: mongojs.ObjectId(id)}, function (err, doc){
    res.json(doc);
  });
});

app.get('/prospectlist/:id', function(req, res){
  var id = req.params.id;
  console.log(id);
  db.prospectlist.findOne({_id: mongojs.ObjectId(id)}, function (err, doc){
    res.json(doc);
  });
});

app.put('prospectlist/:id', function (req, res) {
  var id = req.params.id;
  console.log(req.body.firstname);
});

  // prospect1 = {
  //   firstname: 'Tony',
  //   lastname: 'Blair',
  //   mobile:'44 20 7925 0918',
  //   streetaddress:'10 Downing St',
  //   city: 'London',
  //   postalcode: 'SW1A 2AA',
  //   email: 'tonyblair@uk.gov',
  //   qualify: 'Hot'
  // };
  // prospect2 = {
  //   firstname: 'Sherlock',
  //   lastname: 'Holmes',
  //   mobile: '55 21 3245 0113',
  //   streetaddress: '221b Baker Street',
  //   city: 'London',
  //   email: 'sherlock@detective.co.uk',
  //   qualify: 'Cold'
  // };
  //
  // var prospectlist = [prospect1, prospect2];
  // res.json(prospectlist);


app.set('port', (process.env.PORT || 4444));

app.listen(app.get('port'), function() {
  console.log("Listening on port 4444");
});
