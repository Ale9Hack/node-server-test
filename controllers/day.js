var mongoose=require('mongoose');
var dayModel=require('./../models/day');
var specialistModel=require('./../models/specialist');

var Day=mongoose.model('Day');



exports.getDays=function(req,res){

var page= parseInt(req.query.page)
var pageCount= parseInt(req.query.pagecount)

Day.find({}).skip(page*pageCount)
     .limit(pageCount).then((data)=>{
  res.status(200).jsonp(data);
});

};




exports.setDay=function(req,res){
var day = new Day({
date:new Date(req.body.date)
});


var promise=day.save();

promise.then((doc)=>{
 res.status(200).jsonp(doc);
}).catch((err)=>{
res.status(406).jsonp({errorCode:1})
})
};
