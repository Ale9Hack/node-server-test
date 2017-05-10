var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var DaySchema = new Schema({
date:{type:Date},
intervals:[Date],
turns:[{type: Schema.Types.ObjectId, ref: 'Turn' }],
_specialist:{type: Schema.Types.ObjectId, ref: 'Specialist' }
});


module.exports =  mongoose.model('Day', DaySchema);
