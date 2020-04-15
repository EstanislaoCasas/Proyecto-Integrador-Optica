function userMiddleware(req, res, next){

    
    
    if(req.session.class >=1){

        next(); 
    }else{

        res.send("no tenes permisos")
    }
   
    
}

module.exports = userMiddleware;