let db = require("../../database/models");

const controller = {


    list: (req, res) => {

        

        db.users.findAll({

            attributes: ['id', 'name','email'],
            raw: true, 


        })
		.then(function(usersdb){
            

            let users = usersdb.map(item => {

                let detail = '/api/users/'+ item.id
                return { ...item, detail: detail }
                }) 

               
             
             
            

            let api = {

                count: users.length,
                users: users

            }

            //console.log(test) 
            res.json(api);

  })



        
    },


    listUser: (req, res) => {

        let id = req.params.id    

        db.users.findAll({

            
            where: id 


        })


        db.users.findByPk(id, {

			attributes: ['id', 'name','email', 'avatar'],
            

		 })
		.then(function(usersdb){
            

           
            usersdb['avatar'] = 'http:200.123.152.229:3000/images/avatars/' + usersdb.avatar

               console.log(usersdb);
             
             
            


            //console.log(test) 
            res.json(usersdb);

  })



        
    },





};

module.exports = controller;