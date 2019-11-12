const {User} = require('../models/user.model');

var bcrypt = require('bcryptjs');

exports.user_create = function (req, res, next) {
   let user = new User({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10) 
   });

   user.save(function (err) {
      if (err) {
         return res.status(500).send(err);
      } else {
         const token = user.generateAuthToken();
         res.header("x-auth-token", token).send({
            _id: user._id,
            name: user.name,
            email: user.email
         });
      }
   });
   
};

exports.user_details = function (req, res, next) {
   User.findById(req.params.id, function (err, user) {
       if (err) return next(err);
       let response = 'User does not exists';
       if (user !== null) {
         response = user; 
       } 
       res.send(response);
   })
};

exports.user_update = function (req, res) {
   User.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, user) {
       if (err) return next(err);
       res.send('User updated successfully!');
   });
};

exports.user_delete = function (req, res) {
   User.findByIdAndRemove(req.params.id, function (err) {
       if (err) return next(err);
       res.send('User Deleted successfully!');
   });
};