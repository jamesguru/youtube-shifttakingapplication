const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const announcementRoute = require("./routes/announcement");
const incidentRoute = require("./routes/incidence");
const clientRoute = require("./routes/client");
const shiftRoute = require("./routes/shift");
const { verifyToken } = require("./Middlewares/verifyToken");

dotenv.config();

const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use("/files", express.static("files"));
// routes

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/announcements", announcementRoute);
app.use("/api/v1/incidence", incidentRoute)
app.use("/api/v1/clients", clientRoute)
app.use("/api/v1/shifts", shiftRoute)


// test route

app.get('/test',(req,res)=>{

    res.status(200).json('test is Ok!');
})

mongoose
  .connect(process.env.DB)
  .then(() => {
    console.log("DB connection is successful.");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
