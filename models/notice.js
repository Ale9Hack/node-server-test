var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NoticeSchema = new Schema({
notice:{type:String},
date:{type:Date},
_user:{type: Schema.Types.ObjectId, ref: 'User' }
});


module.exports =  mongoose.model('Day', DaySchema);
