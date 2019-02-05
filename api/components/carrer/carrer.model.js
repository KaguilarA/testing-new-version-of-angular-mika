const mongoose = require('mongoose');

var carrerSchema = new mongoose.Schema({
  carrerName: {
    type: String,
    required: true
  },
  carrerCode: {
    type: String,
    required: true,
    unique: true
  },
  carrerDegree: {
    type: String,
    required: true
  },
  carrerState: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model('Carrer', carrerSchema);