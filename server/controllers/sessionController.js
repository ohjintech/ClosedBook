const Session = require('../models/sessionModel');

const sessionController = {};

/**
* isLoggedIn - find the appropriate session for this request in the database, then
* verify whether or not the session is still valid.
*/
sessionController.isLoggedIn = (req, res, next) => {
  // write code here
  // console.log('reqest', req)
  console.log('request: ', req.cookies)
  console.log('request cookies', req.headers.cookie)

  // verify if user has the "ssid" cookie
  if (!Object.prototype.hasOwnProperty.call(req.cookies,'ssid')){
    return res.redirect('/signup');
    // return next('error in object hasown property cookies session controller');
  } else {
    console.log('im here')
    Session.findOne({cookieId: req.cookies.ssid}, (err,session) => {
      if(err) return next({err: "error in session find one in session controller"});
      if(!session){
        console.log('no session found');
        return res.redirect('/signup');
        //render('./../client/signup', {error: 'you cannot access secret page with signing in. 1'});
      } else {
        return next();
      }
    });
  }
}

/**
* startSession - create and save a new Session into the database.
*/
sessionController.startSession = (req, res, next) => {

  Session.findOne({cookieId: res.locals.id}, (err, session) => {
    if(session){
      return next();
    }
    else {
      Session.create({cookieId: res.locals.id}, (err, session) => {
        if (err) {
          return next({err: 'Error in start session'});
        }
        else { 
          console.log('created session')
          return next();;
        } 
      });
    }
  });
};

module.exports = sessionController;
