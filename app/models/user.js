var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var User = db.Model.extend({
  tableName: 'users',
  hasTimestamps : true,
  initialize : function () {
    this.on('creating', function () {
      var model = this;
      var hasher = Promise.promisify (bcrypt.hash);
      return hasher (model.get ('password'), null, null)
        .then (function (hash) {
          model.set ('password', hash);
        }); 
    });
  },
  checkPassword : function (attempt, cb) {
    bcrypt.compare (attempt, this.get('password'), function (err, res) {
      err ? console.log ('Error in bCrypt Compare: ' + err) : cb (res);
    });
  }
});

module.exports = User;
