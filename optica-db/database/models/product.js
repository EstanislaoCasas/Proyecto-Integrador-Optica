module.exports = (sequelize, dataTypes) => {

  let alias = "products";
  let cols = {

        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true

        },
        name: {

            type: dataTypes.STRING

        },

        description: {

            type: dataTypes.STRING

        },


        price: {

            type: dataTypes.INTEGER
        },


        img1: {

            type: dataTypes.STRING

        },

        img2: {

            type: dataTypes.STRING

        },

        img3: {

            type: dataTypes.STRING

        },


        category_id: {

            type: dataTypes.INTEGER

        },
        
        marca_id: {

            type: dataTypes.INTEGER

        }

  }


  let config = {
        tablename: "products",
        timestamps: false,
        raw: true
  }

  const product = sequelize.define(alias, cols, config);


  product.associate = function(models){
    product.belongsTo(models.categorys, {

        as: "categorys",
        foreignKey: "category_id"
    })

  



}


  return product;


}

