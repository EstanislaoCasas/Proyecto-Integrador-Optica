function adminMiddleware(req, res, next){

    
    
    if(req.session.class==2){

        next(); 
    }else{

        res.send("No tenés permisos")
    }
   
    
}

module.exports = adminMiddleware;