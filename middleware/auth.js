const jwt = require("jsonwebtoken");
const mongoose = require('mongoose');
const dotenv = require('dotenv');

module.exports = function(req, res, next) {
  if (typeof req.params.id !== "undefined" && !mongoose.Types.ObjectId.isValid(req.params.id)){
    return res.status(404).send('Please provide valid id.');
  }

  //get the token from the header if present
  const token = req.headers["x-access-token"] || req.headers["authorization"];
  //if no token found, return response (without going to the next middelware)
  if (!token) return res.status(401).send("Access denied. No token provided.");

  try {
    //if can verify the token, set req.user and pass to next middleware
    const decoded = jwt.verify(token, process.env.MYPRIVATEKEY);
    req.user = decoded;
    next();
  } catch (ex) {
    //if invalid token
    res.status(400).send("Invalid token.");
  }
};