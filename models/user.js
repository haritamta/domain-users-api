const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  givenName: String,
  surname: String,
  email: String,
  phone: String,
  houseNumber: String,
  street: String,
  suburb: String,
  state: String,
  postcode: String,
  country: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', UserSchema);
