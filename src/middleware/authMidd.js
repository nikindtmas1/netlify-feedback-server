const jwt = require('jsonwebtoken');
const { development } = require('../config/config');

const secretAccess = development.secretStr;

function auth(req, res, next) {
    const token = req.headers['x-authorization'];
    if(token){
        const decodetToken = jwt.verify(token, secretAccess)
        if(decodetToken){
            req.user = decodetToken;
        
            next();
        }else{
            res.status(401).json('You are not authorized');
        }
    }else{
        next();
    }
}

function isAuth(req, res, next) {
   
    // const token = req.headers[ 'x-authorization'];
   
    if (req.user) {
        next()
    } else {
        res.status(401).json({message: 'You are not authorized'});
    }
};

function isGuest(req, res, next) {
   
    if(!req.user){
        next();
    };
};

module.exports = {
    auth,
    isAuth,
    isGuest,
};