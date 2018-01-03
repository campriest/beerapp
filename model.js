'use strict';
const Mongoose = require('mongoose');
var Schema     = mongoose.Schema;


var UserSchema =  new Schema({
  firstName: String,
  lastName: String,
  email: String,

});

const Users = Mongoose.model('User', UserSchema);

module.exports = Users;
