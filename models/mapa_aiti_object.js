'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mapa_aiti_object extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  mapa_aiti_object.init({
    mapa_id: DataTypes.BIGINT,
    tipe_objek_kode: DataTypes.STRING,
    pic_analisa: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'mapa_aiti_object',
  });
  return mapa_aiti_object;
};