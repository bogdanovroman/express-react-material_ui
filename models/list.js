var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var listSchema = new Schema({
    name : {type: String, default: 'Безымянный'},
    description : String,
    author: {type: String, default: 'Какой-то пацанчик'},
    pubDate : {type: Date, default: Date.now},
    items : {type: Array, default: []},
});


var List = mongoose.model('List', listSchema);

module.exports = mongoose.model('List', listSchema);