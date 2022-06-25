'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mata_pelajaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  mata_pelajaran.init({
    id_mata_pelajaran: {
      type:DataTypes.INTEGER,
      allowNull:false,
      primaryKey:true,
    },
    nama: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'mata_pelajaran',
  });
  return mata_pelajaran;
};