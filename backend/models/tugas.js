'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tugas extends Model {
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
      this.belongsTo(models.guru,{
        foreignKey:"id_guru",
        as:"guru"
      }),
      this.belongsTo(models.mata_pelajaran,{
        foreignKey:"id_mata_pelajaran",
        as:"mata_pelajaran"
      })
    }
  }
  tugas.init({
    id_tugas:{
      type:DataTypes.INTEGER,
      allowNull:false,
      autoIncrement:true,
      primaryKey:true
      },
    id_guru:{ 
      type: Sequelize.INTEGER,
      references: {
        model: "guru",
        key: "id_guru"
      }
    },
    id_kelas: {
      type: Sequelize.INTEGER,
      references: {
        model: "kelas",
        key: "id_kelas"
      }
    },
    id_mata_pelajaran: {
      type: Sequelize.INTEGER,
      references: {
        model: "mata_pelajaran",
        key: "id_mata_pelajaran"
      }
    },
    nama: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tugas',
  });
  return tugas;
};