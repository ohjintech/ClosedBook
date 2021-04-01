const cookieController = {};

/**
* setCookie - set a cookie with a random number
*/
cookieController.setCookie = (req, res, next) => {
  // write code here
  // create cookie and set in as a response 
  res.cookie('codesmith', 'thinMint', {
    maxAge: 1000000
  });
  // console.log(Math.floor(Math.random()*99));
  // make the secret cookie
  res.cookie('secret', Math.floor(Math.random()*99), {
    httpOnly: true,
  });

  return next();
}


/**
* setSSIDCookie - store the user id in a cookie
*/
cookieController.setSSIDCookie = (req, res, next) => {
  // write code here
  
  // get mongoDB user ID from the local object
  const userId = res.locals.id;

  res.cookie('ssid', userId, {
    maxAge: 1000000000,
    httpOnly: true
  });

  return next();
}

module.exports = cookieController;
