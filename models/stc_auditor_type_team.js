'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class stc_auditor_type_team extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  stc_auditor_type_team.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    create_by: DataTypes.STRING,
    update_by: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'stc_auditor_type_team',
  });
  return stc_auditor_type_team;
};