'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class stc_mapa_tipe_anggaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  stc_mapa_tipe_anggaran.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    create_by: DataTypes.STRING,
    update_by: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'stc_mapa_tipe_anggaran',
  });
  return stc_mapa_tipe_anggaran;
};