const { required } = require('joi');
const mongoose = require('mongoose');
const userSchema  = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        unique:true,
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
},{
    timestamps:true
});

const Users = mongoose.model('users', userSchema);
module.exports = Users;