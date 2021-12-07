'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mapa_jadwal_audit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  mapa_jadwal_audit.init({
    mapa_id: DataTypes.BIGINT,
    penyusunan_mapa_plan_start: DataTypes.DATE,
    penyusunan_mapa_plan_end: DataTypes.DATE,
    penyusunan_mapa_real_start: DataTypes.DATE,
    penyusunan_mapa_real_end: DataTypes.DATE,
    entrance_meeting_plan_start: DataTypes.DATE,
    entrance_meeting_plan_end: DataTypes.DATE,
    entrance_meeting_real_start: DataTypes.DATE,
    entrance_meeting_real_end: DataTypes.DATE,
    pelaksanaan_audit_plan_start: DataTypes.DATE,
    pelaksanaan_audit_plan_end: DataTypes.DATE,
    pelaksanaan_audit_real_start: DataTypes.DATE,
    pelaksanaan_audit_real_end: DataTypes.DATE,
    exit_meeting_plan_start: DataTypes.DATE,
    exit_meeting_plan_end: DataTypes.DATE,
    exit_meeting_real_start: DataTypes.DATE,
    exit_meeting_real_end: DataTypes.DATE,
    Penyusunan_LHA_plan_start: DataTypes.DATE,
    Penyusunan_LHA_plan_end: DataTypes.DATE,
    Penyusunan_LHA_real_start: DataTypes.DATE,
    Penyusunan_LHA_real_end: DataTypes.DATE,
    Wrapup_Meeting_plan_start: DataTypes.DATE,
    Wrapup_Meeting_plan_end: DataTypes.DATE,
    Wrapup_Meeting_real_start: DataTypes.DATE,
    Wrapup_Meeting_real_end: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'mapa_jadwal_audit',
  });
  return mapa_jadwal_audit;
};