const JWT = require('jsonwebtoken')
const JWT_SECRETKEY = "jhgfdfghjhgf";

const requireSignIn = async(req,res,next)=>{
  try {
       const decode = await JWT.verify(
        req.headers.autherization,
        JWT_SECRETKEY
        );
        next();
  } catch (error) {
     console.log(error);
  }
}

module.exports = {
    requireSignIn
}