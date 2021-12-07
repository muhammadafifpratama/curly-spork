'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('mapas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      ewp_id: {
        foreignKey: true,
        allowNull: false,
        type: Sequelize.BIGINT,
      },
      latar_belakang: {
        type: Sequelize.TEXT
      },
      tujuan: {
        type: Sequelize.TEXT
      },
      sumber_informasi: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('mapas');
  }
};