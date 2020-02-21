const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const { check, validationResult, body } = require('express-validator')

const usersFilePath = path.join(__dirname, '../data/users.json');
const usersf = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));





const controller = {
	create: (req, res, next) => {
		let result = validationResult(req)
		let log1 = req.session.login; 

		if (!result.isEmpty()) {
			return res.render('register', {
				errors: result.errors,
				data: req.body,
				login: log1,
				cssp: 'registro'
			})
		}
		
		//asignar id //#endregion
		let listanumeros = [];
		let numeromayor = 0 ;

		let idcontrol = usersf.forEach( users => {
        
       	if (users.id > numeromayor)  {
            numeromayor = users.id ;

       } 
       listanumeros.push(users.id) ;

		})
		


		let idp = numeromayor+1;


		let pwduser = bcrypt.hashSync(req.body.password, 10);

		//controlar si selecciono o no avatar

		if(req.files.length <1){
		
			var adduser = [
				{
					"id": idp,
					"name": req.body.firstname,
					"lastname": req.body.lastname,
					"email": req.body.email,
					"password": pwduser,
					"avatar": "default",
					"category": 1
					
				   }
			
			
			
			]
	
		}else {
			
	
			var adduser = [
				{
					"id": idp,
					"name": req.body.firstname,
					"lastname": req.body.lastname,
					"email": req.body.email,
					"password": pwduser,
					"avatar": req.files[0].filename,
					"category": 1
					
				   }
			
			
			
			]

		}	
	
		
		

		let union = [...usersf, ...adduser];

		let data = JSON.stringify(union);
		fs.writeFileSync(usersFilePath, data);
		

		res.redirect('/users/login');



	},



	login: (req, res) => {
		// Do the magic
	
let	emailuser = req.body.email;

	let selectuser = usersf.filter(function (m) {
         return m.email === emailuser;
        });

	let	pwd = selectuser[0].password;
	let pwdp = req.body.password;
	let iduser = selectuser[0].id;	

	let checkuser = bcrypt.compareSync(pwdp, pwd);

if(checkuser == true) {

	req.session.login = true;

	req.session.userid = iduser;
	req.session.class = selectuser[0].category;

		if(req.body.recordame != undefined) {

			res.cookie('recordame',
			selectuser[0].email, { maxAge: 120000}
			
			);

		}

		res.redirect('/');

//	res.send(iduser);
//		res.send('contraseña correcta');

}else {

	res.send('contraseña incorrecta')

}


//	res.send(pwd);




	},

	//perfil de usuario

	details: (req, res) => {

		let log1 = req.session.login; 
		let userid = req.session.userid;

		let selectuser = usersf.filter(function (m) {
			return m.id == req.params.id;
		   });
	
		   
		   res.render('userdetails', {
			user: selectuser[0],
			login: log1,
			cssp: 'registro',
		})

		
	 


	},






	panel: (req, res) => {
		let log1 = req.session.login; 
		let userid = req.session.userid;
		let classuser = req.session.class;

		res.render('panel', {
			userid: userid,
			login: log1,
			classuser: classuser,
			cssp: 'registro',
		})



	},







	edit: (req, res) => {
		// Do the magic
		let log1 = req.session.login; 
		let userid = req.session.userid;

		let user = usersf.find(function (p) {
			return p.id == userid
		})

		res.render('useredit', {
			user: user,
			login: log1,
			cssp: 'registro',
		})

	},

	update: (req, res, next) => {
		
		let userid2 = req.params.id;
		
		let userlist = usersf.filter(function (m) {
			return m.id != userid2;
		   });




		let selectuser = usersf.filter(function (m) {
			return m.id == userid2;
		   });

		  
			


			if(req.files.length <1){
		
				var modificar = [
					{
						"id": userid2,
						"name": req.body.firstname,
						"lastname": req.body.lastname,
						"email": selectuser[0].email,
						"password": selectuser[0].password,
						"avatar": selectuser[0].avatar,
						"category": selectuser[0].category
						
					   }
				
				
				
				]
		
			}else {
				
		
				var modificar = [
					{
						"id": userid2,
						"name": req.body.firstname,
						"lastname": req.body.lastname,
						"email": selectuser[0].email,
						"password": selectuser[0].password,
						"avatar": req.files[0].filename,
						"category": selectuser[0].category
						
					   }
				
				
				
				]
	
			}




		
			let union = [...userlist, ...modificar];
			
			let data = JSON.stringify(union);
			fs.writeFileSync(usersFilePath, data);	   

			res.redirect('/');		


	},



	editpwd: (req, res) => {
		// Do the magic
		let log1 = req.session.login;
		let userid = req.session.userid;
		res.render('userpwdedit', {
			userid: userid,
			login: log1,
			cssp: 'registro',
		})
	},



	updatepwd: (req, res) => {
		let userid2 = req.params.id;

		let selectuser = usersf.filter(function (m) {
			return m.id == userid2;
		   });

		   let	pwd = selectuser[0].password;


		   let pwdp = req.body.opassword;
		   let iduser = selectuser[0].id;	
	   
		   let checkuser = bcrypt.compareSync(pwdp, pwd);
	   
	   if(checkuser == true) {
	   
		let pwduser = bcrypt.hashSync(req.body.npassword, 10);
	   
		let userlist = usersf.filter(function (m) {
			return m.id != userid2;
		   });
		
		   
		   let modificar = [
			{
				"id": userid2,
				"name": selectuser[0].name,
				"lastname": selectuser[0].lastname,
				"email": selectuser[0].email,
				"password": pwduser,
				"avatar": selectuser[0].avatar,
				"category": selectuser[0].category
			   }
		
		
			]
			
		
			let union = [...userlist, ...modificar];
			
			let data = JSON.stringify(union);
			fs.writeFileSync(usersFilePath, data);	


		res.send('contraseña cambiada')
	   
	   //	res.send(iduser);
	   //		res.send('contraseña correcta');
	   
	   }else {
	   
		   res.send('contraseña incorrecta')
	   
	   }


//	 res.send(selectuser);


	},






	search: (req, res) => {
		// Do the magic
	},
};

module.exports = controller;