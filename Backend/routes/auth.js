const express = require("express");
const User = require("../models/User");
const router = express.Router();
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const multer = require("multer");
dotenv.config();
const { sendWelcomeEmail } = require("../EmailService/Welcome");


// CREATE
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./files");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage: storage });

// REGISTER
router.post("/register", upload.array("files", 5), async (req, res) => {
  const fileNames = req.files.map((file) => file.filename);
  const newUser = User({
    username: req.body.username,
    email: req.body.email,
    fullname: req.body.fullname,
    phone: req.body.phone,
    address: req.body.address,
    staffID: req.body.staffID,
    gender: req.body.gender,
    documents: fileNames,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS
    ).toString(),
  });

  try {
    await newUser.save();
    await sendWelcomeEmail(
      req.body.fullname,
      req.body.staffID,
      req.body.password,
      req.body.email
    );
    res.status(201).json("user saved successfully");
  } catch (error) {
    res.status(500).json("something went wrong");
  }
});

// LOGIN

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ staffID: req.body.staffID });
    if (!user) {
      return res.status(401).json("You have not registered");
    }

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.SECRET
    );

    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    if (originalPassword !== req.body.password) {
      return res.json("wrong credentials");
    }

    const { password, ...info } = user._doc;
    const accessToken = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SEC,
      { expiresIn: "10d" }
    );
    res.status(200).json({ ...info, accessToken });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
