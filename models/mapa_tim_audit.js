'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mapa_tim_audit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  mapa_tim_audit.init({
    mapa_id: DataTypes.BIGINT,
    pn_auditor: DataTypes.STRING,
    stc_auditor_type_team_kode: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'mapa_tim_audit',
  });
  return mapa_tim_audit;
};