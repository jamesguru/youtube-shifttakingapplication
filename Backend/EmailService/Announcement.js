const ejs = require("ejs");
const dotenv = require("dotenv");
const path = require("path");
const sendMail = require("../helpers/sendEmail");
const User = require("../models/User");
dotenv.config();

const announcementEmail = async (title, description) => {
  const users = await User.find();
  if (users.length > 0) {
    for (let user of users) {
      ejs.renderFile(
        "templates/announcement.ejs",
        { description },
        async (err, data) => {
          let messageoptions = {
            from: process.env.EMAIL,
            to: user.email,
            subject: `${title}`,
            html: data,
          };

          try {
            await sendMail(messageoptions);
          } catch (error) {}
        }
      );
    }
  }
};

module.exports = { announcementEmail };
