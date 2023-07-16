const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const authRouter = require("../server/Routes/authRouter");


app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

//Database Connection 

mongoose
  .connect("mongodb://localhost:27017/elecxpress", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });


//Routers
app.use("/auth" ,authRouter);


/*app.post("/login", async (req, res) => {
  const formData = req.body;
  console.log(formData); })*/







/*Login Page SetUp

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
*/


// Start the server
app.listen(5001, () => {
  console.log(`Server running on port 5001`);
});
