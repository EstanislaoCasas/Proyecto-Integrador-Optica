module.exports = (sequelize, dataTypes) => {

    let alias = "pedidos";
    let cols = {
  
          id: {
              type: dataTypes.INTEGER,
              primaryKey: true,
              autoIncrement: true
  
          },
       
  
  
          status: {
  
              type: dataTypes.INTEGER
          },

          f_entrega: {
  
            type: dataTypes.INTEGER
        },

        f_pago: {
  
            type: dataTypes.INTEGER
        },

        precio_total: {
  
            type: dataTypes.INTEGER
        },

        c_items: {
  
            type: dataTypes.INTEGER
        },

        id_user: {
  
            type: dataTypes.INTEGER
        }
  
  
    }
  
  
    let config = {
          tablename: "pedidos",
          timestamps: false,
          raw: true
    }
  
    const pedido = sequelize.define(alias, cols, config);
  
  
  
  
    return pedido;
  
  
  }