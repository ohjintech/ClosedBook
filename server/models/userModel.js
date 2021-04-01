const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// dont need no encryption for the scope of this project
// userSchema.pre('save', async function (next){
//   try {
//     this.password = await bcrypt.hash(this.password, SALT_WORK_FACTOR);
//     return next();
//   }
//   catch (error) {
//     return next('error in userschema pre ', error);
//   }
// });

module.exports = mongoose.model('User', userSchema)