const Hospital = require("../../../database/models/hospitalsPharmacies.js");

module.exports = {
  async findAllHospitals() {
    return Hospital.find({});
  },
  async findHospital(filter) {
    return Hospital.find(filter);
  },
};
