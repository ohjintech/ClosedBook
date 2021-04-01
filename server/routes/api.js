/* eslint-disable linebreak-style */
const express = require('express');

const router = express.Router();
const bioController = require('../controllers/bioController');

// sammple database need

// get request to get profile details
router.get('/bioDetail', 
  bioController.getProfileDetail, 
  (req, res) => res.status(200).send(res.locals.bios)
);

// 
router.put('/bioDetail', 
  bioController.updateProfile, 
  bioController.getProfileDetail, 
  (req, res) => res.status(200).send(res.locals.bios)
);


  // (req, res) => res.status(200).send(tempDB));

// get request for location data
// router.get('/currentLocation',
//   // bioController.getCurrentLocation,
//   // (req, res) => res.status(200).json(res.locals.currentLocation)
//   (req, res) => res.status(200).json('TIGHT BRO'));

// // get request for previous data
// router.get('/',
//   bioController.getPreviousJob,
//   (req, res) => res.status(200).json(res.locals.'???')
// );

// // get request for future plan data
// router.get('/',
//   bioController.getFuturePlans,
//   (req, res) => res.status(200).json(res.locals.'???')
// );

// // get request for hobby data
// router.get('/',
//   bioController.getHobbies,
//   (req, res) => res.status(200).json(res.locals.'???')
// );

// // get request for funfact data
// router.get('/',
//   bioController.getFunFact,
//