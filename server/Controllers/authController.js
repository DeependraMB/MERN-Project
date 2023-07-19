const { hashPassword, comparePassword } = require("../Helpers/authHelper");
const User = require("../Models/User");
const JWT = require("jsonwebtoken");
const JWT_SECRETKEY = "jhgfdfghjhgf";

const signupController = async (req, res) => {
  try {
    const formData = req.body;
    console.log(formData)
 
    
    //Check User Exist or Not
    const existingUser = await User.findOne({username : formData.username });
    console.log(existingUser);
    //Already Existing
    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "Already Reagistered ,Please Login",
      });
    }

    const hashedPassword = await hashPassword(formData.password);
    const hashedCPassword = await hashPassword(formData.cpassword);

    console.log(formData);
    const newUser = new User({
      name: formData.name,
      email: formData.email,
      phoneno: formData.phoneno,
      username: formData.username,
      password: hashedPassword,
      cpassword: hashedCPassword,
    });
    await newUser.save();
    res.status(200).send({
      success: true,
      message: "User Registered successfully",
    });
  } catch (e) {
    console.log(e);
    res.status(500).send({
      success: false,
      message: "Error in signup",
      error: e,
    });
  }
};

// LOGIN Controller

const loginController = async (req, res) => {
  try {
    const formData = req.body;
    console.log(formData);
    if (!formData.username || !formData.password) {
      return res.status(404).send({
        success: false,
        message: "Inavalid password or Username!!",
      });
    }
    const user = await User.findOne({ username:formData.username });
    
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Username is not Registered!!",
      });
    }
    const match = await comparePassword(formData.password, user.password);
    if (!match) {
      
      return res.status(404).send({
        
        sucess: false,
        message: "Invalid Password!!",
      });
    }
    const token = JWT.sign({ _id: user._id }, JWT_SECRETKEY, {
      expiresIn: "7d",
    });
    console.log(token);
    res.status(200).send({
      success: true,
      message: "Login Successfully",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        phoneno: user.phoneno,
        username: user.username,
      },
      token,
    });
    console.log(token);
    console.log(user);
  } catch (e) {
    console.log(e);
    res.status(500).send({
      success: false,
      message: "Error in Login",
      error: e,
    });
  }
};

//test Controller
const testController = (req, res) => {
  res.send("Protected Router");
};

module.exports = {
  signupController,
  loginController,
  testController,
};
