module.exports = (sequelize, dataTypes) => {

    let alias = "users";
    let cols = {
  
          id: {
              type: dataTypes.INTEGER,
              primaryKey: true,
              autoIncrement: true
  
          },
          name: {
  
              type: dataTypes.STRING
  
          },
  
          last_name: {
  
              type: dataTypes.STRING
  
          },
  
  
          category: {
  
              type: dataTypes.INTEGER
          },
  
  
          email: {
  
              type: dataTypes.STRING
  
          },
  
          avatar: {
  
              type: dataTypes.STRING
  
          },

          password: {
  
            type: dataTypes.STRING

        }
  
  
    }
  
  
    let config = {
          tablename: "users",
          timestamps: false,
          raw: true
    }
  
    const user = sequelize.define(alias, cols, config);
  
  
  
  
    return user;
  
  
  }