'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('mapa_uker_aktivitas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      mapa_uker_id: {
        foreignKey: true,
        type: Sequelize.BIGINT
      },
      mtd_aktivitas_kode: {
        type: Sequelize.STRING
      },
      mtd_aktivitas_name: {
        type: Sequelize.STRING
      },
      pic_analisa: {
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('mapa_uker_aktivitas');
  }
};