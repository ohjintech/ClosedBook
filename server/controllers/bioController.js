/** BIO CONTROLLER */
/** queries the database for profile data */

const multer = require('multer'); // used to upload images

const path = require('path');
const Bio = require('../models/bioModel');
const app = require('../server');

const bioController = {};

bioController.getProfilePhoto = (req, res, next) => {
  try {
    next();
  } catch (err) {
    return next({
      log: '',
      message: { err: '' },
    });
  }
};

// query the mongoDB database to get all profile details
bioController.getProfileDetail = (req, res, next) => {
  console.log('bioController.getProfileDetail: querying mongooseDB for cohort member detail object...')
  console.log('Request Params: ', req.params)
    Bio.find({}, (err, bios) => {
        if (err) return next('Error in get bioController.getProfileDetail: ' + JSON.stringify(err))
        
        // store retrieved data into res.locals object and move on to next middleware
        if (bios) {
          console.log('Bios Found. Populating DB...', bios)
          res.locals.bios = bios;
          return next()
        }
      });
};

bioController.updateProfile = (req, res, next) => {
  // find member by unique id
  const changeReq = req.body;
  Bio.findOneAndUpdate({id: req.body.id}, { changeReq }, { new: true }, (err, bios) => {
    if (err) return next('Error in get bioController.updateProfile: ' + JSON.stringify(err))
    
    // store retrieved data into res.locals object and move on to next middleware
    if (bio) {
      console.log('Bios Found. Populating DB...', bios)
      res.locals.bios = bios;
      return next()
    }
  });
};

bioController.updateProfileDetail = (req, res, next) => {
  try {
    next();
  } catch (err) {
    return next({
      log: '',
      message: { err: '' },
    });
  }
};



// DEPRECATED: initial database built by hand
// building the initial database 
bioController.buildDB = (req, res, next) => {
  console.log('Building initial database from seed data....')

  Bio.create({ 
    firstName: req.params.firstName,
    lastName: req.params.lastName,
    img: req.params.img_id,
    currentLocation: req.params.currentLocation,
    homeTown: req.params.homeTown,
    previousJob: req.params.previousJob,
    hobbies: req.params.hobbies,
    }, 
    
    (err, bios) => {
    
    // if database error occurs throw an en error
    if (err) return next('Error in bioController.buildDB: ', JSON.stringify(err))

    // get the user ID
    res.locals.userId = user._id.toString();
    
    // move on to next middleware
    return next()
  })
}




// retrieves all profile photos and stores it on the local memory
// bioController.getProfilePhotos = (req, res, next) => {
//   console.log('Accessing getProfilePhotos method...');
//   console.log('Request params: ', req.params);
//   console.log('Request body: ', req.body);
//   try {
//     Bio.find({ }, (err, bios) => {
//       // error handling: can't find bio
//       if (err) return next(`Error in bioController.getProfilePhotos: ${JSON.stringify(err)}`);

//       // store retrieved data into response object
//       res.locals.photos = bios;
//     });
//     next();
//   } catch (err) {
//     return next({
//       log: '',
//       message: { err: '' },
//     });
//   }
// };

// bioController.getLocations = (req, res, next) => {
//   try {
//     Bio.find({ }, (err, bios) => {
//       // error handling: can't find bio
//       if (err) return next(`Error in bi