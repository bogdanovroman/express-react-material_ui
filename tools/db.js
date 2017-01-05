var List = require('../models/list');
var Category = require('../models/category');
var Product = require('../models/product');

var db = {
  getAllLists : function(req, res, callback){
       List.find(function(err, lists) {
           if ( err ) console.log(err);
           callback(lists);
       });
   },
   getAllCategories : function(callback){
       Category.find(function(err, categories) {
           if ( err ) console.log(err);
           callback(categories);
       });
   },
   getAllProducts : function(callback){
       Product.find(function(err, products) {
           if ( err ) console.log(err);
           callback(products);
       });
   }
}
module.exports = db;
