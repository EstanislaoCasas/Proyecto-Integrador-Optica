module.exports = (sequelize, dataTypes) => {

    let alias = "marcas";
    let cols = {
  
          id: {
              type: dataTypes.INTEGER,
              primaryKey: true,
              autoIncrement: true
  
          },
          name: {
  
              type: dataTypes.STRING
  
          }
  
  
    }
  
  
    let config = {
          tablename: "marcas",
          timestamps: false,
          raw: true
    }
  
    const marca = sequelize.define(alias, cols, config);
  
  /*
    category.associate = function(models){
       

   category.hasMany(models.products, {

            as: "productoscategory",
            foreignKey: "category_id"
        })
    
  
  
  
    }
*/
  
    return marca;
  
  
  }