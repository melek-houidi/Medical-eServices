const express = require("express");
const router = express.Router();
const services = require("../../services");

router.get("/", async (req, res) => {
  try {
    var Users = await services.userServices.findAllUsers();
    res.send(Users);
  } catch (error) {
    res.send(error);
  }
});

router.post("/createUser", async (req, res) => {
  try {
    var newUser = await services.userServices.createUser(req.body);
    res.send(newUser);
  } catch (error) {
    res.send(error);
  }
});

// doctor.delete('/:doctor' , async (req,res)=>{
//   try{
//       const{doctor }=req.params
//       constdeleteDoctor =await Doctor.findByIdandDelete(id);
//       if(!deleteDoctor)throw new Error('error');
//       res.status(200).json(deleteDoctor);
//   }catch (err){
//       res.status(500).json({message: err.message})
//   }
// }
// doctor.post('/doctor' , async (req,res)=>{
//   const newDoctor = neew Doctor(req.body);
//   try{
//       const doctorCreate=await newDoctor.save();
//       if(!doctorCreate)throw new Error('error');
//       res.status(200).json(doctorCreate);
//   }catch (err){
//       res.status(500).json({message: err.message})
//   }
// }

module.exports = router;
