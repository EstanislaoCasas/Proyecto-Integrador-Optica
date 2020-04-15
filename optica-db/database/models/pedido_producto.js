module.exports = (sequelize, dataTypes) => {

    let alias = "pedidos_productos";
    let cols = {
  
          id: {
              type: dataTypes.INTEGER,
              primaryKey: true,
              autoIncrement: true
  
          },
       
  
  
          cantidad: {
  
              type: dataTypes.INTEGER
          },

          product_id: {
  
            type: dataTypes.INTEGER
        },

        pedido_id: {
  
            type: dataTypes.INTEGER
        }
  
  
    }
  
  
    let config = {
          tablename: "pedidos_productos",
          timestamps: false,
          raw: true
    }
  
    const pedido_producto = sequelize.define(alias, cols, config);
  
  
  
  
    return pedido_producto;
  
  
  }