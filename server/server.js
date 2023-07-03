const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const User = require('../server/Models/User');



app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());




mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.post('/signup', async (req, res) => {
  const formData = req.body;
  console.log(formData)


  try {

    const newUser = new User({
      name: formData.name,
      email: formData.email,
      phoneno: formData.phoneno,
      username: formData.username,
      password: formData.password,
      cpassword: formData.cpassword,
    });
    await newUser.save().then((data) => {
      console.log(data);
      res.json({ Status: "S" });
    }).catch((err) => {
      console.log(err);
      res.json({ Status: "Error while inserting" });
    });
  }
  catch (err) {
    console.error(err);
    res.json({ Status: "F" });
  }


})

// Start the server
app.listen(5000, () => {
  console.log(`Server running on port 5000`);
});
