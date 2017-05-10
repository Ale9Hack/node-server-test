var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var methodOverride = require("method-override");
var express = require('express');
var app = express();
var router=require('./router')();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());


app.use( '/api',router);


var db;
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1/reaver', (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
})
