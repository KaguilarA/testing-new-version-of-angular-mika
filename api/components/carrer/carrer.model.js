const mongoose = require('mongoose');

var carrerSchema = new mongoose.Schema({
  _name: {
    type: String,
    required: true
  },
  _code: {
    type: String,
    required: true,
    unique: true
  },
  _degree: {
    type: String,
    required: true
  },
  _state: {
    type: Boolean,
    required: true
  },
});

module.exports = mongoose.model('Carrer', carrerSchema);
