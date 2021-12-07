'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mapa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      mapa.belongsTo(models.ewp, {
        foreignKey: "ewp_id",
      });
    }
  };
  mapa.init({
    ewp_id: DataTypes.BIGINT,
    latar_belakang: DataTypes.TEXT,
    tujuan: DataTypes.TEXT,
    sumber_informasi: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'mapa',
  });
  return mapa;
};