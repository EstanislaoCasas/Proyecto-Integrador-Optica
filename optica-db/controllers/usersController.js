const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const { check, validationResult, body } = require('express-validator')

const usersFilePath = path.join(__dirname, '../data/users.json');
const usersf = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

let db = require("../database/models");



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
		
	


		db.users.findAll({
			where: {
				email: {[db.Sequelize.Op.like] : req.body.email}	
		
					}	
				})
		
				.then(function(selectuser){
		
					console.log(selectuser.length);
					
					let mensaje = 'Cuenta de mail se encuentra registrada';
					if (selectuser.length != 0) {
						return res.render('register', {
							//errors: result.errors,
						//	data: req.body,
							login: log1,
							cssp: 'registro',
							mensaje: mensaje,
							filejs: 'register'
						})
					}

		let pwduser = bcrypt.hashSync(req.body.password, 10);

		//controlar si selecciono o no avatar

		if(req.files.length <1){
		

			db.users.create({


				name: req.body.firstname,
				last_name: req.body.lastname,
				email: req.body.email,
				password: pwduser,
				avatar: "default.jpg",
				category: 1 
	
	
	
	
		})		

	
		}else {
			
			db.users.create({


				name: req.body.firstname,
				last_name: req.body.lastname,
				email: req.body.email,
				password: pwduser,
				avatar: req.files[0].filename,
				category: 1 
	
	
	
	
		})
	

		}	
	
	

		res.redirect('/users/login');



	})	

	},



	login: (req, res) => {
		


		let result = validationResult(req)
		let log1 = req.session.login; 

		if (!result.isEmpty()) {
			return res.render('login', {
				errors: result.errors,
			//	data: req.body,
				login: log1,
				cssp: 'registro'
			})
		}		


	
let	emailuser = req.body.email;

/*	let selectuser = usersf.filter(function (m) {
         return m.email === emailuser;
        });
*/

db.users.findAll({
	where: {
		email: {[db.Sequelize.Op.like] : emailuser}	

			}	
		})

		.then(function(selectuser){

			console.log(selectuser.length);
			let mensaje = 'Cuenta de mail no existe en la base de datos'
			if (selectuser.length == 0) {
				return res.render('login', {
					//errors: result.errors,
				//	data: req.body,
					login: log1,
					cssp: 'registro',
					mensaje: mensaje,
					filsejs: 'login'
				})
			}


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




  })

},

	//perfil de usuario

	details: (req, res) => {

		let log1 = req.session.login; 
		let userid = req.session.userid;


		


			db.users.findByPk(req.params.id)
			.then(function(selectuser){
			
				 
				res.render('userdetails', {
					user: selectuser,
					login: log1,
					cssp: 'registro',

			})


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

	/*	let user = usersf.find(function (p) {
			return p.id == userid
		})*/



		db.users.findByPk(userid)
		.then(function(selectuser){
		
			 
			res.render('useredit', {
				user: selectuser,
				login: log1,
				cssp: 'registro',
			})


	})







		

	},

	update: (req, res, next) => {
		
		let userid2 = req.params.id;
		
	

			if(req.files.length <1){
		
	



				db.users.update({

					name: req.body.firstname,
					last_name: req.body.lastname
					
					
			
					}, {
			
						where: {
							id: userid2		
						}
			
			
				})	





		
			}else {
				
		


				db.users.update({

					name: req.body.firstname,
					last_name: req.body.lastname,
					
					avatar: req.files[0].filename
					
			
					}, {
			
						where: {
							id: userid2		
						}
			
			
				})	


	
			}





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

		/*let selectuser = usersf.filter(function (m) {
			return m.id == userid2;
		   });
*/


				db.users.findByPk(userid2)
				.then(function(selectuser){

					
					



					let	pwd = selectuser.password;


					let pwdp = req.body.opassword;
				//	let iduser = selectuser[0].id;	
				
					let checkuser = bcrypt.compareSync(pwdp, pwd);
				
				if(checkuser == true) {
				
				 let pwduser = bcrypt.hashSync(req.body.npassword, 10);
				
			

				 db.users.update({

					
					password: pwduser
					
					
					
			
					}, {
			
						where: {
							id: userid2		
						}
			
			
				})


		 
		 
				 res.send('contraseña cambiada')
				
				//	res.send(iduser);
				//		res.send('contraseña correcta');
				
				}else {
				
					res.send('contraseña incorrecta')
				
				}















				})	


		 


//	 res.send(selectuser);


	},


	pedidos: (req, res) => {
		// Do the magic
		let log1 = req.session.login; 
		let userid = req.session.userid;

	/*	let user = usersf.find(function (p) {
			return p.id == userid
		})*/


		db.pedidos.findAll({
			where: {
				id_user: userid
	
					}	
				})
		
		.then(function(pedidos){
		
			console.log(pedidos)
			 
			res.render('viewpedidos', {
				pedidos: pedidos,
				login: log1,
				cssp: 'carrito',
			})


	})







		

	},





	test: (req, res) => {
		// Do the magic
	/*	let mail = "alejandro@pompon.com.ar"
		db.users.findAll({
			where: {
				email: {[db.Sequelize.Op.like] : mail}	
	
					}	
				})

				.then(function(peliculas){
					console.log(typeof(peliculas));
					res.send(peliculas[0].email)
		  })

    */
		 let test = req.session.class  
		console.log(test)  
		 res.send(test) ;


	},
};

module.exports = controller;