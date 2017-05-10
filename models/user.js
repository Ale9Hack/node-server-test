var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userSchema = new Schema({
 firstName: { type: String },
 lastName{type:String},
 email: { type: String },
 password: {type:String},
 phone:{type:Number}
});

module.exports =  mongoose.model('User', userSchema);
