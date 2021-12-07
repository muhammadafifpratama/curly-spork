'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('mapa_ukers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      mapa_id: {
        type: Sequelize.BIGINT
      },
      ref_auditee_branch_kode: {
        type: Sequelize.INTEGER
      },
      ref_auditee_orgeh: {
        type: Sequelize.INTEGER
      },
      mapa_aiti_object_id: {
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