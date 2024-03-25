const ejs = require("ejs");
const dotenv = require("dotenv");
const path = require("path");
const sendMail = require("../helpers/sendEmail");
dotenv.config();

const sendWelcomeEmail = async (fullname, staffID, password, email) => {
  ejs.renderFile(
    "templates/welcome.ejs",
    { fullname, staffID, password },
    async (err, data) => {
      let messageoptions = {
        from: process.env.EMAIL,
        to: email,
        subject: "Welcome to AM SHIFTER",
        html: data,
      };

      try {
        await sendMail(messageoptions);
      } catch (error) {
        console.log(error);
      }
    }
  );
};

module.exports = {sendWelcomeEmail };
