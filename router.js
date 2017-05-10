var express = require('express');
var app = express();

var turn=require('./controllers/turn')
var day=require('./controllers/day')
var specialist=require('./controllers/specialist')

module.exports=()=>{

  var api = express.Router();
  api.get('/getturns', function (req, res) {
  });

  api.post('/setturn', function (req, res) {
    turn.setTurn(req,res)
  });

  api.post('/setday', function (req, res) {
    day.setDay(req,res)
  });

  api.get('/getdays', function (req, res) {
    day.getDays(req,res)
  });

  api.post('/setspecialist', function (req, res) {
    specialist.setSpecialist(req,res)
  });

return api;
}
