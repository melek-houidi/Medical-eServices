const express = require("express");
const router = express.Router();
const services = require("../../services");

router.get("/", async (req, res) => {
  try {
    var doctors = await services.doctorServices.findAllDoctors();
    res.send(doctors);
  } catch (error) {
    res.send(error);
  }
});

router.post("/findDoctor", async (req, res) => {
  try {
    var doctors = await services.doctorServices.findDoctor(
      req.body
    );
    res.send(doctors);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
