const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const User = require("../server/Models/User");
const LoginModel = require("../server/Models/LoginModel");


app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

//Database Connection 

mongoose
  .connect("mongodb://localhost:27017/mydatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });


//Signup Page setup

app.post("/signup", async (req, res) => {
  const formData = req.body;
  console.log(formData);

  try {
    const newUser = new User({
      name: formData.name,
      email: formData.email,
      phoneno: formData.phoneno,
      username: formData.username,
    });
    await newUser.save();

    const newLogin = new LoginModel({
      username: formData.username,
      password: formData.password,
      cpassword: formData.cpassword,
    });
    await newLogin
      .save()
      .then((data) => {
        console.log(data);
        res.json({ Status: "S" });
      })
      .catch((err) => {
        console.log(err);
        res.json({ Status: "Error while inserting" });
      });
  } catch (err) {
    console.error(err);
    res.json({ Status: "F" });
  }
});


//Login Page SetUp

app.post("/login", async (req, res) => {
  const formData = req.body;
  console.log(formData);

  try {
    const check = await LoginModel.findOne({ username: formData.username });
    
    console.log(check);

    if (check) {
      res.json("exist");
      console.log("Mundalil");
    } else {
      res.json("notexist");
    }
  } catch (e) {
    res.json("notexist");
  }
});



// Start the server
app.listen(5001, () => {
  console.log(`Server running on port 5000`);
});
