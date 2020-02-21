var express = require('express');
var router = express.Router();
var productsController = require('../controllers/productsController')

let adminMiddleware = require('../middlewares/adminMiddleware')

router.get('/', productsController.products) //Pagina de todos los productos

router.get('/create', adminMiddleware , productsController.createForm) //Pagina de formulario de creacion de producto
router.post('/create', adminMiddleware , productsController.create) //Guardado de producto

router.get('/:idProducto', productsController.productDetail) //Pagina de cada producto 

router.get('/edit/:idProducto', adminMiddleware , productsController.edit) //Pagina de formulario de edicion
router.put('/edit/:idProducto', adminMiddleware , productsController.update) //Pagina de almacenamiento de edicion

router.get('/delete/:idProducto', adminMiddleware , productsController.delete)


module.exports = router;