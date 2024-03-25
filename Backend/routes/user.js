const express = require("express");
const router = express.Router();
const CryptoJS = require("crypto-js");
const dotenv = require("dotenv");
const User = require("../models/User");
const { sendUpdatePasswordEmail } = require("../EmailService/updatepassword");
const { sendResetPasswordEmail } = require("../EmailService/resetPassword");
dotenv.config();

// UPDATE

router.put("/:id", async (req, res) => {
  let unencryptedpassword = req.body.password;

  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET
    ).toString();
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    if (req.body.email && unencryptedpassword) {
      await sendUpdatePasswordEmail(req.body.email, unencryptedpassword);
    }

    res.status(201).json(updatedUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

// DELETE

router.delete(":/id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(201).json("User deleted successfully");
  } catch (error) {
    res.status(500).json("something");
  }
});

// GET USER

router.get("/find/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET ALL USERS

router.get("/", async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
});

// reset password

router.post("/reset", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).json("user is not registered");
    }
    await sendResetPasswordEmail();
    res.status(200).json("Check your email for reset password link");
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/update-password", async (req, res) => {
  try {
    const user = User.findOne({ staffID: req.body.staffID });
    if (!user) {
      return res.status(401).json("user is not registered");
    }

    const encryptedPassword = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET
    ).toString();

    await User.findByIdAndUpdate(user._id, {
      $set: { password: encryptedPassword },
    });

    await sendUpdatePasswordEmail(user.email, req.body.password);

    res.status(200).json("Check your email for a new password");
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
