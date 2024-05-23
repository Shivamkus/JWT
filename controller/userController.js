const Users = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

module.exports = {
  registerUser: async (req, res) => {
    const user = new Users(req.body);
    user.password = await bcrypt.hash(req.body.password, 10);

    try {
      const response = await user.save();
      response.password = undefined;
      return res.status(201).json({ message: `success`, data: response });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  },

  loginUser: async (req, res) => {

    try {
        const user = await Users.findOne({email : req.body.email});
        if(!user){
            return res.status(400).json({message : "Auth Failed , Invalid username or Password "});
        }
        const isPassEqual = await bcrypt.compare(req.body.password, user.password);
        if(!isPassEqual){
            return res.status(401).json({message: "Password is not match"});
        }
        const tokenObject = {
            _id: user._id,
            name:user.name,
            email:user.email,
        }
        
        const jwtToken = jwt.sign(tokenObject, process.env.SECRET, {expiresIn:'5h'});
        return res.status(200).json({jwtToken, tokenObject});
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error", error });

    }

  },

  getUser : async(req, res)=>{
    try {
        const user = await Users.find({},{password:0});
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error", error });

    }
  }

};
