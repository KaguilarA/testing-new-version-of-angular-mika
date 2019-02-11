const mongoose = require('mongoose'),
  bcrypt = require('bcrypt'),
  states = ['postulate', 'eligible', 'active', 'inactive', 'rejected', 'banned'],
  roles = ['admin', 'professor', 'assistant', 'student'],
  SALT_WORK_FACTOR = 10;


var userSchema = new mongoose.Schema({
  _role: {
    type: String,
    required: true,
    em: roles
  },
  _name1: {
    type: String,
    required: true
  },
  _name2: {
    type: String,
    default: ''
  },
  _surname1: {
    type: String,
    required: true
  },
  _surname2: {
    type: String,
    required: true
  },
  _userIdType: {
    type: String,
    required: true
  },
  _userId: {
    type: String,
    required: true,
    minlength: 9,
    maxlength: 9
  },
  _email: {
    type: String,
    required: true,
    unique: true
  },
  _password: {
    type: String,
    required: true
  },
  _photo: {
    type: String,
    required: true
  },
  _phone: {
    type: String,
    minlength: 8,
    maxlength: 8
  },
  _state: {
    type: String,
    required: true,
    em: states
  },
  //Admin and assitant olny
  _jobPosition: {
    type: String
  },
  //Professor only
  specialty: {
    type: String
  },
  councilMember: {
    type: String
  },
  //Student only
  _birthdate: {
    type: Date
  },
  curriculum: {
    type: String
  },
  _carrer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Carrer'
  },
  githubUser: {
    type: String
  },
  website: {
    type: String
  },
  rejectReason: {
    type: String,
    default: ''
  }
});

userSchema.pre('save', function (next) {
  var user = this;
  if (!S.isModified('password')) return next();
  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) return next(err);

    bcrypt.hash(user._password, salt, function (err, hash) {
      if (err) return next(err);
      user._password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function (candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this._password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

module.exports = mongoose.model('User', userSchema);
