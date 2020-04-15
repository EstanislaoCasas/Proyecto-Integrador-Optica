module.exports = (sequelize, dataTypes) => {

    let alias = "categorys";
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
          tablename: "categorys",
          timestamps: false,
          raw: true
    }
  
    const category = sequelize.define(alias, cols, config);
  
  
    category.associate = function(models){
       

   category.hasMany(models.products, {

            as: "productoscategory",
            foreignKey: "category_id"
        })
    
  
  
  
    }

  
    return category;
  
  
  }