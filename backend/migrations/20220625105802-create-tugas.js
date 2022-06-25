'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tugas', {
      id_tugas: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_guru: {
        type: Sequelize.INTEGER,
        references: {
          model: "guru",
          key: "id_guru"
        }
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
      nama: {
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
    await queryInterface.dropTable('tugas');
  }
};