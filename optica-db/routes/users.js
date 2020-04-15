var express = require('express');
var router = express.Router();
const { check, validationResult, body } = require('express-validator')
const multer = require('multer')
const path = require('path');

//multer avatar
var storage = multer.diskStorage({
	destination: function (request, file, callback) {
		callback(null, './public/images/avatars');
	},
	filename: function (request, file, callback) {
		callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
	}
});

//const upload = multer({storage: storage})


const upload = multer({ storage: storage,
  fileFilter: function (req, file, cb) {
  if (!file.originalname.match(/\.(jpge|png|gif|jpg)$/)) {
  return cb(new Error('Error en el tipo de archivo.'));



  }
  cb(null, true);
  }
  });

//



const usersController = require('../controllers/usersController');

const userValidation = [
  check('email').isEmail().withMessage('El campo debe ser un email valido'),
  check('password').isLength({min: 6, max: 12}).withMessage('El password debe tener entre 6 y 12 caracteres'),
  check('firstname').isLength({min: 2, max: 25}).withMessage('El nombre debe tener entre 2 y 25 caracteres'),
  check('lastname').isLength({min: 2, max: 25}).withMessage('El apellido debe tener entre 2 y 25 caracteres'),
]

const userLoginValidation = [
  check('email').isEmail().withMessage('El campo debe ser un email valido'),
  check('password').isLength({min: 6, max: 12}).withMessage('El password debe tener entre 6 y 12 caracteres'),
  
]



/* GET users listing. */
router.get('/', function(req, res, next) {

  if(req.cookies.recordame != undefined && req.session.login == undefined) {
    /*
            let	emailuser = req.cookie.recordame;
    
      let selectuser = usersf.filter(function (m) {
             return m.email === emailuser;
            });
    
      
        let iduser = selectuser[0].id;	
      */
        req.session.login = true;
    /*
      req.session.userid = iduser;
      req.session.class = selectuser[0].category;
    
    
            console.log(selectuser);
    */
        }

  res.send('test');
});

router.get('/register', function(req, res, next) {
  
  let log1 = req.session.login; 
  res.render('register', { 
            login: log1,
            cssp: 'registro',
            filejs: 'register' 
  
  });
});

// post de registracion a db 
router.post('/register/', upload.any(), userValidation, usersController.create); /* POST - Store in DB */

//get login
router.get('/login', function(req, res, next) {

  let log1 = req.session.login; 

  res.render('login', {login: log1,
                      cssp: 'registro',
                     filejs: 'login'
  
            });
});


//post login
router.post('/login/',  userLoginValidation, usersController.login); /* POST - login in DB */


//logout
router.get('/logout', function(req, res, next) {
    
    req.session.destroy();
    res.redirect('/');

});



//user details
router.get('/details/:id', usersController.details); 

//panel
router.get('/panel/', usersController.panel); 

router.get('/pp/', usersController.test); 


// edit user
router.get('/edit/', usersController.edit); /* GET - Form to edit */
router.put('/edit/:id', upload.any(), usersController.update); /* PUT - Update in DB */

// edit pwd user
router.get('/edit/pwd/', usersController.editpwd); /* GET - Form to edit */

router.put('/edit/pwd/:id', usersController.updatepwd); /* PUT - Update in DB */


// user pedidos

router.get('/pedidos/', usersController.pedidos);



router.get('/test', function(req, res, next) {
//  res.send('tu id de usuario es ' + req.session.login);
if (req.session.login == true){

    res.send("estas logeado")
}else{

  res.send("no estas logeado")
}

});

//get login
router.get('/p', function(req, res, next) {
  
  let log1 = req.session.userid;

  res.render('test', {login: log1});
});


module.exports = router;
