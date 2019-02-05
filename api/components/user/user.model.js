const mongoose = require('mongoose'),
  bcrypt = require('bcrypt'),
  states = ['postulate', 'eligible', 'active', 'inactive', 'rejected', 'banned'],
  roles = ['admin', 'professor', 'assistant', 'student'],
  SALT_WORK_FACTOR = 10;


var userSchema = new mongoose.Schema({
  role: {
    type: String,
    required: true,
    em: roles
  },
  firstName: {
    type: String,
    required: true
  },
  secondName: {
    type: String
  },
  firstSurname: {
    type: String,
    required: true
  },
  secondSurname: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true,
    minlength: 9,
    maxlength: 9
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  photo: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    minlength: 8,
    maxlength: 8
  },
  state: {
    type: String,
    required: true,
    em: states
  },
  //Admin and assitant olny
  jobPosition: {
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
  birthDate: {
    type: Date
  },
  curriculum: {
    type: String
  },
  carrer: {
    type: String
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
  if (!user.isModified('password')) return next();
  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function (candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

module.exports = mongoose.model('User', userSchema);