'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('mapa_jadwal_audits', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      mapa_id: {
        allowNull: false,
        foreignKey: true,
        type: Sequelize.BIGINT
      },
      penyusunan_mapa_plan_start: {
        type: Sequelize.DATE
      },
      penyusunan_mapa_plan_end: {
        type: Sequelize.DATE
      },
      penyusunan_mapa_real_start: {
        type: Sequelize.DATE
      },
      penyusunan_mapa_real_end: {
        type: Sequelize.DATE
      },
      entrance_meeting_plan_start: {
        type: Sequelize.DATE
      },
      entrance_meeting_plan_end: {
        type: Sequelize.DATE
      },
      entrance_meeting_real_start: {
        type: Sequelize.DATE
      },
      entrance_meeting_real_end: {
        type: Sequelize.DATE
      },
      pelaksanaan_audit_plan_start: {
        type: Sequelize.DATE
      },
      pelaksanaan_audit_plan_end: {
        type: Sequelize.DATE
      },
      pelaksanaan_audit_real_start: {
        type: Sequelize.DATE
      },
      pelaksanaan_audit_real_end: {
        type: Sequelize.DATE
      },
      exit_meeting_plan_start: {
        type: Sequelize.DATE
      },
      exit_meeting_plan_end: {
        type: Sequelize.DATE
      },
      exit_meeting_real_start: {
        type: Sequelize.DATE
      },
      exit_meeting_real_end: {
        type: Sequelize.DATE
      },
      Penyusunan_LHA_plan_start: {
        type: Sequelize.DATE
      },
      Penyusunan_LHA_plan_end: {
        type: Sequelize.DATE
      },
      Penyusunan_LHA_real_start: {
        type: Sequelize.DATE
      },
      Penyusunan_LHA_real_end: {
        type: Sequelize.DATE
      },
      Wrapup_Meeting_plan_start: {
        type: Sequelize.DATE
      },
      Wrapup_Meeting_plan_end: {
        type: Sequelize.DATE
      },
      Wrapup_Meeting_real_start: {
        type: Sequelize.DATE
      },
      Wrapup_Meeting_real_end: {
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
    await queryInterface.dropTable('mapa_jadwal_audits');
  }
};