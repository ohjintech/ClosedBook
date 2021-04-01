const User = require('../models/userModel');
const app = require('../server')

const userController = {};

userController.getAllUsers = (req, res, next) => {
  User.find({}, (err, users) => {
    // if a database error occurs, call next with the error message passed in
    // for the express global error handler to catch
    if (err) return next('Error in userController.getAllUsers: ' + JSON.stringify(err));
    
    // store retrieved users into res.locals and move on to next middleware
    res.locals.users = users;
    return next();
  });
};

userController.verifyUser = (req, res, next) => {
  // write code here
  User.findOne({username: req.body.username}, 'username password', (err, user) => {
    if (err){
      return next('error in user find one verify user', err) 
    }
    if (!user) {
      // redirect if incorrect pw or nonexistent user
      return res.redirect('/signup'); 
    }
    return next();
  });
};


module.exports = userController;