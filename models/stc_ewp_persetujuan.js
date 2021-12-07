'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class stc_ewp_persetujuan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  stc_ewp_persetujuan.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    create_by: DataTypes.STRING,
    update_by: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'stc_ewp_persetujuan',
  });
  return stc_ewp_persetujuan;
};