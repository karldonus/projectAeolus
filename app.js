var express = require('express');
var app = express();
var methodOverride = require('method-override');
var path = require('path');
var mongojs = require('mongojs');
var db = mongojs('prospectlist', ['prospectlist']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public/"));
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

app.put('/prospectlist/:id', function (req, res){
  var id = req.params.id;
  console.log(req.body.firstname);
  db.prospectlist.findAndModify({query: {_id: mongojs.ObjectId(id)},
    update: {$set: {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      mobile: req.body.mobile,
      streetaddress: req.body.steetaddress,
      city: req.body.city,
      postalcode: req.body.postalcode,
      email: req.body.email,
      qualify: req.body.qualify,
      notes: req.body.notes
    }},
    new: true}, function (err, doc) {
      res.json(doc);
    });
});

app.set('port', (process.env.PORT || 4444));

app.listen(app.get('port'), function() {
  console.log("Listening on port 4444");
});
