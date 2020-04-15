const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/products.json');
//const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
let db = require("../database/models");

const { check, validationResult, body } = require('express-validator')

const controller = {
    products: (req, res) => {
        /*

        let log1 = req.session.login;

        db.products.findAll()
		.then(function(products){
            
            res.render('productos', {productos: products,
                login: log1,
                cssp: 'registro',

})

  })*/
        res.redirect('/products/listado/1');



        
    },
    productDetail: (req, res) => {
        let log1 = req.session.login;
        let classuser = req.session.class;
        let id = req.params.idProducto


        db.products.findByPk(id)
        .then(function(producto){
           
            res.render('productdetails', {
                producto: producto,
                login: log1,
                cssp: 'details',
                classuser: classuser,
            })

       })




        
    },
    createForm: (req, res) => {
        let log1 = req.session.login; 
        let userid = req.session.userid;
        
       let categoria = db.categorys.findAll();

       let marca = db.marcas.findAll();
       Promise.all([categoria, marca])
       .then(function([category, marca]) {

         

        res.render('addproduct', {
            marca: marca,
            category: category,
            login: log1,
            cssp: 'registro',
           filejs: 'addproduct'
           
		})

    })



    },
    create: (req, res) => {


        let result = validationResult(req)
        let log1 = req.session.login; 
        



		if (!result.isEmpty()) {
			return res.render('addproduct', {
				errors: result.errors,
			//	data: req.body,
				login: log1,
                cssp: 'registro',
                category : '',
                marca: '',
			})
		}

        db.products.create({


			name: req.body.name,
			description: req.body.description,
            price : req.body.price,
            img1: req.body.img1,
            img2: req.body.img2,
            img3: req.body.img3,
            category_id: req.body.category,
            marca_id: req.body.marca



    })
		

		res.redirect('/');


//res.send(numeromayor);

    },
    edit: (req, res) => {
        let log1 = req.session.login; 
        let userid = req.session.userid;
        let id = req.params.idProducto



        db.products.findByPk(id)
        .then(function(producto){
           
            res.render('editProduct', {
                producto: producto,
                login: log1,
                cssp: 'registro',
                
            })

       })

        

        
    },
    update: (req,res) => {
        let prid = req.params.idProducto;
        
      



        db.products.update({

            name : req.body.name,
            description : req.body.description,
   //         category : req.body.category,
     //       color : req.body.colors,
            price : req.body.price,
            img1: req.body.img1,
            img2: req.body.img2,
            img3: req.body.img3
    
            }, {
    
                where: {
                    id: prid		
                }
    
    
        })
       


  //      res.send(prid);    
   
		

		res.redirect('/');

		
    },



    delete: (req,res) => {
        let prid = req.params.idProducto;
        
 


        db.products.destroy({

			where: {
				id: prid

			}

	})
		

		res.redirect('/');

		
    },

    search: (req, res) => {
        let log1 = req.session.login; 
        let userid = req.session.userid;
        let id = req.query.buscar;



        db.products.findAll({
			where: {
				name: {[db.Sequelize.Op.like] : '%'+ id + '%'}	
	
					}	
				})
        .then(function(productos){
           
            res.render('productos', {productos: productos,
                login: log1,
                cssp: 'registro',

            })

       })

        

        
    },


    categoria: (req, res) => {
        let log1 = req.session.login; 
        let userid = req.session.userid;
        let id = req.params.id;

        console.log(id);

        db.products.findAll({
			where: {
				category_id: id
	
					}	
				})
        .then(function(productos){
           
            res.render('productos', {productos: productos,
                login: log1,
                cssp: 'registro',

            })

       })

        

        
    },


    listadopg: (req, res) => {
        let log1 = req.session.login; 
        let userid = req.session.userid;
        let id = req.params.id;

        console.log(id);


        let productos = 	db.products.findAll({
			
	
			limit: 4,
			offset: (req.params.id - 1) * 4
			
        }) ;
        

        let productostotal = db.products.count();

        
        Promise.all([productos, productostotal])

			.then(function([productos, productostotal]) {


				

                productostotal = (productostotal / 4) + 1;
                productostotal = Math.ceil(productostotal);

				



				
                

                res.render('productos', {productos: productos,
                    login: log1,
                    cssp: 'registro',
                    totalp: productostotal
    
                })

			})
    
    
    
    
    
    
    
    
    
    
    
    
    },



}

module.exports = controller