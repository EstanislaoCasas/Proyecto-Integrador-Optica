var express = require('express');
var router = express.Router();
var carritoController = require('../controllers/carritoController')

let userMiddleware = require('../middlewares/userMiddleware')





router.get('/view', userMiddleware, carritoController.view) 

router.post('/add', userMiddleware, carritoController.add) //Guardado de producto


router.get('/test', carritoController.test) 

router.get('/test2', carritoController.test2) 

//router.get('/sqla', carritoController.sqla)

router.post('/comprar', userMiddleware, carritoController.comprar)

router.post('/confirm', userMiddleware, carritoController.confirm)

module.exports = router;