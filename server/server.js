const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser');


const PORT = 3000;
const app = express();
const apiRouter = require('./routes/api');
const memberRouter = require('./routes/memberRouter');

/**Handle parsing request body */
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// use cookie parser
app.use(cookieParser());

/** handle requests for static files */
// app.use(express.static(path.resolve(__dirname, '../src')))
//app.use('/', (req, res) => (res.sendFile(path.resolve(__dirname, '../src'))))

/** define route handlers */

app.use('/', apiRouter);

// catch all route handler for unknown routes
app.use((req, res) => res.status(404).send('Wrong page buddy'))

/** global error handler */
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' }
  };

  const errorObj = Object.assign({}, defaultErr, err)
})

/**Start Server**/

app.listen(PORT, () => {
  console.log(`Express server running on ${PORT}`)
})

module.exports = app;




// const tempArr = [ 
//   { firstName: 'Hannah', lastName: 'Chun' },
//   { firstName: 'Hannah', lastName: 'Chun' },
//   { firstName: 'Jeanne', lastName: 'Won' },
//   { firstName: 'Holly', lastName: 'Kim' },
//   { firstName: 'Denise', lastName: 'Kwan' },
//   { firstName: 'Ixchel', lastName: 'Montoya' },
//   { firstName: 'Jamie', lastName: 'Yang' },
// ];
// const tempDB = [
//   { firstName: 'Hannah', lastName: 'Montana', img_id: 15315, currentLocation: 'Los Angeles', homeTown: 'New York', previousJob: 'Underwater Basket Weaver', hobbies: 'firebreathing' },
//   { firstName: 'Mark', lastName: 'Etusus', img_id: 15315, currentLocation: 'Atlantis', homeTown: 'Rome', previousJob: 'Gladiator', hobbies: 'dragon shopping' },
//   { firstName: 'James', lastName: 'Allen', img_id: 215123, currentLocation: 'Mexico', homeTown: 'Mexico', previousJob: 'Filmmaker', hobbies: 'eating' },
//   { firstName: 'Helen', lastName: 'Atticus', img_id: 12123, currentLocation: 'Newport', homeTown: 'PebbleBeach', previousJob: 'none', hobbies: 'mimosaas' },
//   { firstName: 'Harry', lastName: 'Potter', img_id: 135351, currentLocation: 'Hogwarts', homeTown: 'under the stairs', previousJob: 'freeloader', hobbies: 'getting rekt by V' },
//   { firstName: 'Shelley', lastName: 'Sheller', img_id: 7348737, currentLocation: 'Long Beach', homeTown: 'Hungtington Beach', previousJob: 'hippie', hobbies: 'selling seashells by the seashore' },
// ]