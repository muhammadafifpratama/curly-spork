'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ewps', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      pn_kepala_uka: {
        type: Sequelize.STRING
      },
      project_name: {
        type: Sequelize.STRING
      },
      info_team_audit: {
        type: Sequelize.JSON
      },
      audit_type_kode: {
        allowNull: false,
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      status_persetujuan: {
        type: Sequelize.STRING
      },
      number_adendum: {
        type: Sequelize.SMALLINT
      },
      info_periode_pelaksanaan_start: {
        type: Sequelize.DATE
      },
      Info_periode_pelaksanaan_end: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('ewps');
  }
};