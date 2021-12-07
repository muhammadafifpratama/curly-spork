'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('mapa_tim_audits', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      mapa_id: {
        allowNull: false,
        type: Sequelize.BIGINT,
        foreignKey: true,
      },
      pn_auditor: {
        allowNull: false,
        type: Sequelize.STRING
      },
      stc_auditor_type_team_kode: {
        allowNull: false,
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
    await queryInterface.dropTable('mapa_tim_audits');
  }
};