const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const verifyToken = (req, res, next) => {
  const authtoken = req.headers.token;
  if (authtoken) {
    const token = authtoken.split("")[1];

    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err) {
        res.status(403).json("token is not valid");
      }

      req.user = user;

      next();
    });
  } else {
    res.status(401).json("You are not authenticated");
  }
};

module.exports = { verifyToken };
