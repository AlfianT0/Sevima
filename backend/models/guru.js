'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class guru extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.kelas,{
        foreignKey:"id_kelas",
        as:"kelas"
      }),
      this.belongsTo(models.mata_pelajaran,{
        foreignKey:"id_mata_pelajaran",
        as:"mata_pelajaran"
      })
    }
  }
  guru.init({
    id_guru: {
      type:DataTypes.INTEGER,
      allowNull:false,
      primaryKey:true,
    },
    nama: DataTypes.STRING,
    id_mata_pelajaran: {
      type: Sequelize.INTEGER,
      references: {
        model: "mata_pelajaran",
        key: "id_mata_pelajaran"
      }
    },
    id_kelas:{
      type: Sequelize.INTEGER,
      references: {
        model: "kelas",
        key: "id_kelas"
      }
    },
    no_tlp: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'guru',
  });
  return guru;
};