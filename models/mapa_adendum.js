'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mapa_adendum extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      mapa_adendum.belongsTo(models.ewp, {
        foreignKey: "mapa_id",
      });
    }
  };
  mapa_adendum.init({
    mapa_id: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'mapa_adendum',
  });
  return mapa_adendum;
};