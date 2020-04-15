var express = require('express');
var router = express.Router();
var productsController = require('../controllers/productsController')

let adminMiddleware = require('../middlewares/adminMiddleware')

const { check, validationResult, body } = require('express-validator')


const createProductValidator = [
    
    check('img1').isLength({min: 2, max: 150}).withMessage('Ingrese un link valido para la portada'),
    check('name').isLength({min: 5, max: 75}).withMessage('El nombre del producto tiene que tener minimo  5 caracteres'),
    check('description').isLength({min: 20, max: 750}).withMessage('La descripcion  tiene que tener minimo 20 caracteres'),
  ]


router.get('/', productsController.products) //Pagina de todos los productos

router.get('/listado/:id', productsController.listadopg) //Pagina de todos los productos


router.get('/search/', productsController.search) //buscar productos


router.get('/create', adminMiddleware , productsController.createForm) //Pagina de formulario de creacion de producto
router.post('/create', adminMiddleware , createProductValidator, productsController.create) //Guardado de producto

router.get('/categoria/:id', productsController.categoria) //mostrar productos de una categoria

router.get('/:idProducto', productsController.productDetail) //Pagina de cada producto 

router.get('/edit/:idProducto', adminMiddleware , productsController.edit) //Pagina de formulario de edicion
router.put('/edit/:idProducto', adminMiddleware , productsController.update) //Pagina de almacenamiento de edicion

router.get('/delete/:idProducto', adminMiddleware , productsController.delete)


module.exports = router;