'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ewp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ewp.init({
    pn_kepala_uka: DataTypes.STRING,
    project_name: DataTypes.STRING,
    info_team_audit: DataTypes.JSON,
    audit_type_kode: DataTypes.STRING,
    status: DataTypes.STRING,
    status_persetujuan: DataTypes.STRING,
    number_adendum: DataTypes.SMALLINT,
    info_periode_pelaksanaan_start: DataTypes.DATE,
    Info_periode_pelaksanaan_end: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'ewp',
  });
  return ewp;
};