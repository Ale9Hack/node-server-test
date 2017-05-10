var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var SpecialistSchema = new Schema({
firstname:{type:String,required: true},
lastname:{type:String,required: true},
age:{type:Number,required: true},
country:{type:String,required: true},
address:{type:String,required: true},
phones:[Number],
categories:[String]
});

module.exports =  mongoose.model('Specialist', SpecialistSchema);
