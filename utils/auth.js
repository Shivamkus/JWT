const jwt = require('jsonwebtoken');

const ensureAuthenticated = (req, res, next)=>{
    if(!req.headers['authorization']){
        return res.status(403).json({message : "token is required"});
    }
    try {
        const decoded = jwt.verify(req.headers['authorization'], process.env.SECRET);
        return next();
    } catch (error) {
        return res.status(403).json({ message: "Token is not valid or It's Expired", error });

    }
}

module.exports ={
    ensureAuthenticated
}