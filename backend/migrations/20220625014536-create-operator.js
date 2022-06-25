'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('operator', {
      id_operator: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      nama_operator: {
        type: Sequelize.STRING
      },
      level: {
          type: Sequelize.ENUM({
            values:['petugas','admin']
          })
        },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('operator');
  }
};