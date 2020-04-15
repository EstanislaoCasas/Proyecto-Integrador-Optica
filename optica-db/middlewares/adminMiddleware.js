function adminMiddleware(req, res, next){

    
    
    if(req.session.class==2){

        next(); 
    }else{

        res.send("no tenes permisos")
    }
   
    
}

module.exports = adminMiddleware;