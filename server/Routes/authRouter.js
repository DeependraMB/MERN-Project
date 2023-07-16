const express = require("express");
const router = express.Router();
const { signupController,loginController } = require("../Controllers/authController");



// SIGNUP || METHOD = POST
router.post("/signup", async (req, res) => {
  try {
    await signupController(req, res);
  } catch (error) {
    console.error("Error in /signup route:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});




// LOGIN || METHOD = POST

router.post("/login", async (req, res) => {
    try {
      await loginController(req, res);
    } catch (error) {
      console.error("Error in /login route:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });


  module.exports = router;