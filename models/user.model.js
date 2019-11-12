const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const dotenv = require('dotenv');

//simple schema
const UserSchema = mongoose.Schema({
   name: { type: String, required: true, unique: true },
   email: { type: String, index: true, unique: true, required: true },
   password: { type: String, required: true, select: false }
});

UserSchema.plugin(uniqueValidator);

//custom method to generate authToken 
UserSchema.methods.generateAuthToken = function() { 
   const token = jwt.sign({ _id: this._id, isAdmin: this.isAdmin }, process.env.MYPRIVATEKEY); //get the private key from the config file -> environment variable
   return token;
}

const User = mongoose.model('User', UserSchema);
// Export the model
module.exports.User = User;