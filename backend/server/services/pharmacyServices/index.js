const Pharmacy = require("../../../database/models/hospitalsPharmacies.js");

module.exports = {
  async findAllPharmacies() {
    return Pharmacy.find({});
  },
  async findPharmacy(filter) {
    return Pharmacy.find(filter);
  },
};
