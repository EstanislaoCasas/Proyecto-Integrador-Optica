const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
let db = require("../database/models");





const controller = {
    add: (req, res) => {

        let log1 = req.session.login;
        
        let idp = Number(req.body.id) ;
      
        let cantidad = req.body.cantidad;
        
/*        res.render('productos', {productos: products,
                                login: log1,
        
  
  
                            })

                                */

                               if(req.session.carrito == undefined ){

                                req.session.carrito = [];
                          }

                            //   db.products.findByPk(idp)
                            //   .then(function(producto){
                                  
                                let productocarrito = [ 
                                    {
                                    id: idp,
                                    cantidad: cantidad
                                }            
                                ]

                                req.session.carrito = [...req.session.carrito, ...productocarrito];

                           //     res.send(productocarrito);
                           res.redirect('/products/')

                            //  })




    },



    test: (req, res) => {
      if(req.session.carrito == undefined ){

            res.send("carrito no esta definido");
      }else{
            res.send(req.session.carrito);
      }

    },


    test2: (req, res) => {
     
    let  carrito = req.session.carrito ;
    let idpedido = 76;

        for(i = 0; i < carrito.length; i++) {


            db.pedidos_productos.create({


                cantidad: carrito[i].cantidad,
                product_id: carrito[i].id,
                pedido_id : idpedido
               
    
    
    
        })


        }




        res.send("ok");

    },

    view: (req, res) => {
       let cproductos = req.session.carrito;
       
       let cproductosid = [];

       for(let i=0; i<cproductos.length; i++) {
                cproductosid.push(
                    cproductos[i].id
         );
       }

  

        db.products.findAll({
            where: {
                id: cproductosid,	
    
                    },
            raw: true,        	
                })
    
    
            .then(function(productosc){

                let test = productosc;
                let productoscf = [];

            for(let i=0; i<test.length; i++) {
            productoscf.push({
            ...test[i], 
            ...(cproductos.find((itmInner) => itmInner.id === test[i].id))}
            );
            }

            console.log(productoscf);

            //calcular precio total de cada producto
            let totalp = productoscf.map(item => {

                let preciotp = item.price * item.cantidad
                return { ...item, ptotal: preciotp }
                }) 


            //calcular precito total del carrito
            
            let precioTotalc = totalp.reduce((total, item) => {
                return total + item.ptotal 
            }, 0);  


               // res.send(productoscf);

               let log1 = req.session.login;
              
               res.render("carrito2", {
                   carritod: totalp,
                   login:log1,
                   precioTotalc:precioTotalc,
                   cssp: 'carrito',
                   filejs: 'viewcarrito'
                  
                  })

      })
            
            
        },


    comprar: (req, res) => {
        let log1 = req.session.login;
        let pid = req.body.pid;
        let cantidadp = req.body.cantidadp;
      
       
// convertir string a int 

        pid = pid.map(function(na){

            return Number(na)   
      });



        cantidadp = cantidadp.map(function(na){

            return Number(na)   
      });

//


//rearmar carrito

let carrito = [];

for(let i=0; i<pid.length; i++) {
  carrito.push({
   
    id: pid[i],
    cantidad: cantidadp[i]
    

}
  );
}

///

db.products.findAll({
    where: {
        id: pid,	

            },
    raw: true,        	
        })


    .then(function(productosc){

        let test = productosc;
        let productoscf = [];

    for(let i=0; i<test.length; i++) {
    productoscf.push({
    ...test[i], 
    ...(carrito.find((itmInner) => itmInner.id === test[i].id))}
    );
    }    


     req.session.carrito = productoscf;

        res.render("confirmarpedido", {
       // carritod: totalp,
        login:log1,
      //  precioTotalc:precioTotalc,
       
       })


       // res.json(productoscf);

    })
        

    },

    confirm: (req, res) => {
     
        let  carrito = req.session.carrito ;

        let pr_total = carrito.reduce((total, item) => {

            return total + (item.cantidad * item.price)
        }, 0); 
        
        let f_entrega = Number(req.body.f_entrega);
          
    
          
        db.pedidos.create({


			status: 0,
			description: req.body.description,
            f_entrega : f_entrega,
            precio_total : pr_total,
            c_items: carrito.length,
            id_user: req.session.userid 
           



    })
    .then(function(x){
        let ide= x.get('id')
        return ide;
        
    }) 
		
    .then(function(p){
        console.log(p);



        for(i = 0; i < carrito.length; i++) {


            db.pedidos_productos.create({


                cantidad: carrito[i].cantidad,
                product_id: carrito[i].id,
                pedido_id : p
               
    
    
    
        })


        }




        res.redirect('/');        
    }) 




    














    
         //   res.send(req.body.f_entrega);
    
        }
    







}

module.exports = controller