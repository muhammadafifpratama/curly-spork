'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mapa_uker_subaktivitas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  mapa_uker_subaktivitas.init({
    mapa_uker_aktivitas_id: DataTypes.BIGINT,
    mtd_sub_aktivitas_kode: DataTypes.STRING,
    mtd_sub_aktivitas_name: DataTypes.STRING,
    pic_analisa: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'mapa_uker_subaktivitas',
  });
  return mapa_uker_subaktivitas;
};