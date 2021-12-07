'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('mapa_ukers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      mapa_id: {
        allowNull: false,
        foreignKey: true,
        type: Sequelize.BIGINT
      },
      ref_auditee_branch_kode: {
        allowNull: false,
        type: Sequelize.STRING
      },
      ref_auditee_orgeh: {
        type: Sequelize.STRING
      },
      mapa_aiti_object_id: {
        foreignKey: true,
        type: Sequelize.BIGINT
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
    await queryInterface.dropTable('mapa_ukers');
  }
};