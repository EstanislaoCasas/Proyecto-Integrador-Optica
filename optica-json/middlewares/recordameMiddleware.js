function recordameMiddleware(req, res, next){

    
    
    const fs = require('fs');
const path = require('path');
    const usersFilePath = path.join(__dirname, '../data/users.json');
    const usersf = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

    if(req.cookies.recordame != undefined && req.session.login == undefined) {

        let	emailuser = req.cookies.recordame;

	let selectuser = usersf.filter(function (m) {
         return m.email === emailuser;
        });

	
    let iduser = selectuser[0].id;	
  
    req.session.login = true;

	req.session.userid = iduser;
	req.session.class = selectuser[0].category;


        console.log(selectuser);

    }
    next(); 
    
}

module.exports = recordameMiddleware;
