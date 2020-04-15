let db = require("../../database/models");

const controller = {


    list: (req, res) => {

   




        let categorias =  db.categorys.findAll({

            include: [{association: "productoscategory"}]
        }) ;


        let productos = db.products.findAll({

            raw: true, 
        })
        ;

        Promise.all([categorias, productos])

            .then(function([categorias, productosdb]) {

                let productos = productosdb.map(item => {

                    let detail = '/api/products/'+ item.id
                    return { ...item, detail: detail }
                    }) 



                let cantidadcatprod = {

                };
    
                for (let index = 0; index < categorias.length; index++) {
                  
                    cantidadcatprod[categorias[index].name] = categorias[index].productoscategory.length
                }
    


               let prod = {

                count : productos.length,
                CountByCategory: cantidadcatprod,
                products: productos  

               } 

               res.json(prod);



            })


        
    },

    listProduct: (req, res) => {

   
        let id = req.params.id

        console.log(id);
        db.products.findByPk(id)
        .then(function(producto){
           
           res.json(producto)

       })



   


        
    },






};

module.exports = controller;