var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var User = db.Model.extend({
  tableName: 'users',

  // initialize: function(){
  //   this.on('creating', function(model, attrs, options){
  //     var salt = bcrypt.genSalt(10);
  //     var hash = bcrypypt.hash(model.get('password', salt));
  //     console.log(hash); 
  //     model.set('hashedPW', hash);
  //   });
  // }
});

module.exports = User;
