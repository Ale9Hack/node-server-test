var mongoose=require('mongoose');
var specialistModel=require('./../models/specialist');

var Specialist=mongoose.model('Specialist');


exports.setSpecialist=function(req,res){

var categories=req.body.categories?req.body.categories.split(","):undefined;
var phones=req.body.phones?req.body.phones.split(","):undefined;

var specialist = new Specialist({
  firstname:req.body.firstname,
  lastname:req.body.lastname,
  age:parseInt(req.body.age),
  country:req.body.country,
  address:req.body.address,
  categories:categories,
  phones:phones
});


var promise=specialist.save();

promise.then((doc)=>{
 res.status(200).jsonp(doc);
}).catch((err)=>{
res.status(406).jsonp({errorCode:err})
})
};
