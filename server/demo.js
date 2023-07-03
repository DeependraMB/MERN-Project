// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');





const app = express();
const PORT = process.env.PORT || 4000;

// Middleware

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
const cors = require('cors');



// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

app.post('/signup',async(req,res)=>{
  const formData = req.body;

  const newUser = new User({

  name: formData.name,
    email: formData.email,
    phoneno: formData.phoneno,
    username: formData.username,
    password: formData.password,
    cpassword: formData.cpassword,
  });

  await newUser.save((err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error occurred while saving the user');
    } else {
      res.send('Signup successful');
    }
  });


})

// Start the server
app.listen(5000, () => {
  console.log(`Server running on port 5000`);
});
