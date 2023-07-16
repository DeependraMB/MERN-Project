const User = require("../Models/User");
const JWT = require("jsonwebtoken");
const JWT_SECRETKEY = "jhgfdfghjhgf";

const signupController = async (req, res) => {
  

  try {
    const formData = req.body;
  console.log(formData);
    const newUser = new User({
      name: formData.name,
      email: formData.email,
      phoneno: formData.phoneno,
      username: formData.username,
      password: formData.password,
      cpassword: formData.cpassword,
    });
    await newUser.save();
    res.status(200).send({
      success: true,
      message: "User signed up successfully",
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

const loginController = async (req,res)=>{
    try {
        const formData = req.body;

        const user = await User.findOne({ username: formData.username });
        const token = JWT.sign({ _id: user._id }, JWT_SECRETKEY, { expiresIn: "7d" });
        res.status(200).send({
            success: true,
            message: "Login Successfully",
            user:{
                _id: user._id,
                name:user.name,
                email: user.email
            },
            token,
        })
        console.log(token);
        console.log(user)
    } catch (e) {
        console.log(e);
        res.status(500).send({
          success: false,
          message: "Error in Login",
          error: e,
        });
    }
}

module.exports = {
    signupController,loginController
  };