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
bioController.getProfiles = (req, res, next) => {
  console.log('bioController.getProfiles: querying mongooseDB for cohort members object...')
    Bio.find({}, (err, bios) => {
        if (err) return next('Error in get bioController.getProfiles: ' + JSON.stringify(err))
        
        // store retrieved data into res.locals object and move on to next middleware
        if (bios) {
          console.log('Bios Found. Populating DB...')
          res.locals.bios = bios;
          return next()
        }
      });
};

bioController.getDetail = (req, res, next) => {
  console.log('bioController.findOne: querying mongooseDB for cohort member detail object...')
    Bio.findOne({_id: req.body._id}, (err, detail) => {
        if (err) return next('Error in get bioController.findOne: ' + JSON.stringify(err))
        
        // store retrieved data into res.locals object and move on to next middleware
        if (bios) {
          console.log('Bios Found. Populating DB...')
          res.locals.detail = detail;
          return next()
        }
      });
};



bioController.updateProfile = (req, res, next) => {
  // find member by unique id
  const changeReq = req.body;
  console.log('Request Body: ', changeReq)
  // need to find by id, so that all other fields can be changed by the user
  Bio.findOneAndUpdate({firstName: req.body.firstName}, {$set: changeReq}, { new: true }, (err, bios) => {
    if (err) return next('Error in get bioController.updateProfile: ' + JSON.stringify(err))
    
    // store retrieved data into res.locals object and move on to next middleware
    if (bios) {
      console.log('Update Request Approved. Updating DB...')
      res.locals.bios = bios;
      return next();
    }
  });
};

// DEPRECATED: initial database built by hand
// building the initial database 
// bioController.buildDB = (req, res, next) => {
//   console.log('Building initial database from seed data....')

//   Bio.create({ 
//     firstName: req.params.firstName,
//     lastName: req.params.lastName,
//     img: req.params.img_id,
//     currentLocation: req.params.currentLocation,
//     homeTown: req.params.homeTown,
//     previousJob: req.params.previousJob,
//     hobbies: req.params.hobbies,
//     }, 
    
//     (err, bios) => {
    
//     // if database error occurs throw an en error
//     if (err) return next('Error in bioController.buildDB: ', JSON.stringify(err))

//     // get the user ID
//     res.locals.userId = user._id.toString();
    
//     // move on to next middleware
//     return next()
//   })
// }

module.exports = bioController;