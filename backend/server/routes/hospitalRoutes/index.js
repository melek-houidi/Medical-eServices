const express = require("express");
const router = express.Router();
const services = require("../../services");

router.get("/", async (req, res) => {
  try {
    var hospitals = await services.hospitalServices.findAllHospitals();
    res.send(hospitals);
  } catch (error) {
    res.send(error);
  }
});

router.post("/findHospital", async (req, res) => {
  try {
    var hospitals = await services.hospitalServices.findHospital(
      req.body
    );
    res.send(hospitals);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
