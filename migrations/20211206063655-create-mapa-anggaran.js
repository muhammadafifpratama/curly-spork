'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('mapa_anggarans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      mapa_id: {
        foreignKey: true,
        allowNull: false,
        type: Sequelize.BIGINT
      },
      stc_mapa_tipe_anggaran_kode: {
        foreignKey: true,
        type: Sequelize.STRING
      },
      tipe_anggaran_name: {
        type: Sequelize.STRING
      },
      amount: {
        type: Sequelize.BIGINT
      },
      deskripsi: {
        type: Sequelize.STRING
      },
      tanggal: {
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
    await queryInterface.dropTable('mapa_anggarans');
  }
};