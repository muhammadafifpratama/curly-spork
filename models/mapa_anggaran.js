'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mapa_anggaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  mapa_anggaran.init({
    mapa_id: DataTypes.BIGINT,
    stc_mapa_tipe_anggaran_kode: DataTypes.STRING,
    tipe_anggaran_name: DataTypes.STRING,
    amount: DataTypes.BIGINT,
    deskripsi: DataTypes.STRING,
    tanggal: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'mapa_anggaran',
  });
  return mapa_anggaran;
};