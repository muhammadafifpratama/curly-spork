'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mapa_uker extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  mapa_uker.init({
    mapa_id: DataTypes.BIGINT,
    ref_auditee_branch_kode: DataTypes.INTEGER,
    ref_auditee_orgeh: DataTypes.INTEGER,
    mapa_aiti_object_id: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'mapa_uker',
  });
  return mapa_uker;
};