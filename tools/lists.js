var db = require('./db');
var lists = {
  getAll: function(req, res){
      db.getAllLists(req, res, function(lists){
        res.end( JSON.stringify(lists) );
      })
  }
}
module.exports = lists;
