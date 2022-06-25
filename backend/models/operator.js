'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class operator extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  operator.init({
    id_operator: {
    type:DataTypes.INTEGER,
    allowNull:false,
    autoIncrement:true,
    primaryKey:true
  },
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    nama_operator: DataTypes.STRING,
    level: DataTypes.ENUM(["petugas","admin"])
  }, {
    sequelize,
    modelName: 'operator',
    tableName: 'operator'
  });
  return operator;
};