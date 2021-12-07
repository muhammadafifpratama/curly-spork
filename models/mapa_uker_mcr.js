'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mapa_uker_mcr extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  mapa_uker_mcr.init({
    mapa_uker_id: DataTypes.BIGINT,
    ref_mcr_kode: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'mapa_uker_mcr',
  });
  return mapa_uker_mcr;
};