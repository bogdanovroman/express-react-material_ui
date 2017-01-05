var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var productSchema = new Schema({
    name : {type: String, default: 'Безымянный'},
    units : String,
    category: {type: String, default: 'Другое'},
    subCategory: Array,
    qty : {type: Number, min: 1, default: 1}
});


var Product = mongoose.model('Product', productSchema);
module.exports = mongoose.model('Product', productSchema);