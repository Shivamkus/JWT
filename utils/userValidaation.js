
const joi = require('joi');

const userRegisterVAlidate = (req, res, next) =>{
    const schema =  joi.object({
        name:joi.string().min(3).max(80).required(),
        email:joi.string().email().required(),
        password:joi.string().min(4).alphanum().required()
    });

    const {error, value} = schema.validate(req.body);
    if(error){
        return res.status(400).json({message: "Bad Request", error})
    }
    next();
}


const userLoginVAlidate = (req, res, next) =>{
    const schema =  joi.object({
        email:joi.string().email().required(),
        password:joi.string().min(4).alphanum().required()
    });

    const {error, value} = schema.validate(req.body);
    if(error){
        return res.status(400).json({message: "Bad Request", error})
    }
    next();
}

module.exports = {
    userRegisterVAlidate,
    userLoginVAlidate
}