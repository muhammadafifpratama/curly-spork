'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class stc_aiti_tipe_objek extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  stc_aiti_tipe_objek.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    stc_aiti_tipe_objek_kode: DataTypes.STRING,
    create_by: DataTypes.STRING,
    update_by: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'stc_aiti_tipe_objek',
  });
  return stc_aiti_tipe_objek;
};