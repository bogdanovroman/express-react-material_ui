var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categorySchema = new Schema({
    name : {type : String, default : 'Безымянная'},
    items : {type : Array, default: []},
    subCategory : {type : Array, default: []}
});

categorySchema.static('findByName', function (name, callback) {
    return this.find({ name: name }, callback);
});

var Category = mongoose.model('Category', categorySchema);
module.exports = mongoose.model('Category', categorySchema);