const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    
    required: true
  },
  email: {
    
    required: true,
    unique: true
  },
  phoneno: {
    
    required: true
  },
  username: {
    
    required: true,
    unique: true
  },
  password: {
    
    required: true
  },
  cpassword: {
    
    required: true
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
