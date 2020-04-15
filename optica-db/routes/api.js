var express = require('express');
var router = express.Router();
var apiUsersController = require('../controllers/api/apiusersController')
var apiProductsController = require('../controllers/api/apiProductsController')
//users api

router.get('/users/', apiUsersController.list) ;


router.get('/users/:id', apiUsersController.listUser) ;


//products api

router.get('/products/', apiProductsController.list) ;


router.get('/products/:id', apiProductsController.listProduct) ;

module.exports = router;