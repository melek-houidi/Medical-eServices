const Doctor = require("../../../database/models/doctors.js");

module.exports = {
  async findAllDoctors() {
    return Doctor.find({});
  },
  async findDoctor(filter) {
    return Doctor.find(filter);
  },
};