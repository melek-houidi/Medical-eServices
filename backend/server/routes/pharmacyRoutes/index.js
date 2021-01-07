const express = require("express");
const router = express.Router();
const services = require("../../services");

router.get("/", async (req, res) => {
  try {
    var pharmacies = await services.pharmacyServices.findAllPharmacies();
    res.send(pharmacies);
  } catch (error) {
    res.send(error);
  }
});

router.post("/findPharmacy", async (req, res) => {
  try {
    var pharmacies = await services.pharmacyServices.findPharmacy(
      req.body
    );
    res.send(pharmacies);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
