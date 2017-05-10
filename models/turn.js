var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TurnSchema = new Schema({
_user:{type: Schema.Types.ObjectId, ref: 'User'},
 startTime: { type: Date },
 endTime:{type:Date},
 comment:{type:String},
 status:{type:String}
});


module.exports =  mongoose.model('Turn', TurnSchema);
