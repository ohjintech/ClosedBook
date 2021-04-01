const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// connecting to the mongoose database
mongoose.connect('mongodb+srv://ohjintech:RedBull226@tacocluster.0pmit.mongodb.net/cohortBios?retryWrites=true&w=majority', 
  { userNewUrlParser: true, useUnifiedTopology: true , dbName: 'cohortBios'}
);
mongoose.connection.once('open', () => {
  console.log('Successfully Connected to Mongoose Database')
});

const bioSchema = new Schema({ 
  firstName: { type: String, required: true },
  lastName: { type: String, required: true},
  img: { type: String, data: Buffer, required: true},
  currentLocation: { type: String },
  homeTown: { type: String },
  previousJob: { type: String },
  hobbies: { type: String },
});

// first arg of .model is the collection name
module.exports = mongoose.model('members', bioSchema)   