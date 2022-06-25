'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('guru', {
      id_guru: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama: {
        type: Sequelize.STRING
      },
      id_mata_pelajaran: {
        type: Sequelize.INTEGER,
        references: {
          model: "mata_pelajaran",
          key: "id_mata_pelajaran"
        }
      },
      id_kelas: {
        type: Sequelize.INTEGER,
        references: {
          model: "kelas",
          key: "id_kelas"
        }
      },
      no_tlp: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('guru');
  }
};