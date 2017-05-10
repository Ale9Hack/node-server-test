var mongoose=require('mongoose');
var turnModel=require('./../models/turn');
var Turn=mongoose.model('Turn');

exports.setTurn=function(req,res){
var turn = new Turn({
date: req.body.date,
comment: req.body.comment,
});


var promise=turn.save();

promise.then((doc)=>{
 res.status(200).jsonp(doc);
}).catch((err)=>{
res.status(406).jsonp({errorCode:1})
})
};
