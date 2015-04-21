var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var User = db.Model.extend({
  tableName: 'users',

  initialize: function(){
    this.on('creating', function(model, attrs, options){
      var salt = bcrypt.genSaltSync(10);
      var hash = bcrypt.hashSync(model.get('password', salt));
      console.log(hash); 
      model.set('password', hash);
    });
  },

  verify: function(password){
    var hash = this.get('password');
    return bcrypt.compareSync(password, hash);
  }
});

module.exports = User;
