const express = require("express");
const Announcement = require("../models/Announcement");
const { announcementEmail } = require("../EmailService/Announcement");
const router = express.Router();

// post announcement

router.post("/", async (req, res) => {
  try {
    const newAnnouncement = Announcement(req.body);
    await newAnnouncement.save();
    await announcementEmail(req.body.title, req.body.description);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get announcements

router.get('/', async(req,res) =>{
    try {
        const announcements = await Announcement.find().sort({createdAt:-1});
        res.status(200).json(announcements);
    } catch (error) {
        res.status(500).json(error)
    }
})

router.delete("/:id", async(req,res) =>{
    try {
        await Announcement.findByIdAndDelete(req.params.id);
        res.status(201).json('announcement deleted successfully');

    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router;
