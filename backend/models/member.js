'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class member extends Model {
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
      })
    }
  }
  member.init({
    id_member: {
      type:DataTypes.INTEGER,
      allowNull:false,
      primaryKey:true,
    },
    nama: DataTypes.STRING,
    id_kelas: DataTypes.INTEGER,
    alamat: DataTypes.TEXT,
    no_tlp: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'member',
    tableName: 'member'
  });
  return member;
};