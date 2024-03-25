const express = require("express");
const Client = require("../models/Client");
const router = express.Router();

// ADD client

router.post("/", async (req, res) => {
  try {
    const newClient = Client(req.body);
    await newClient.save();
    res.status(201).json(newClient);
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET ALL CLIENTS

router.get("/", async (req, res) => {
  try {
    const clients = await Client.find().sort({ createdAt: -1 });
    res.status(200).json(clients);
  } catch (error) {
    res.status(500).json(error);
  }
});

//UPDATE CLIENT

router.put("/:id", async (req, res) => {
  try {
    const updateClient = await Client.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.status(201).json(updateClient);
  } catch (error) {
    res.status(500).json(error);
  }
});

// DELETE CLIENT

router.delete("/:id", async (req, res) => {
  try {
    await Client.findByIdAndDelete(req.params.id);
    res.status(201).json("Client deleted successfully");
  } catch (error) {
    res.status(500).json(error);
  }
});

// FIND CLIENT USING ID

router.get("/find/:id", async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);
    res.status(200).json(client);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
