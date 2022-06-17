'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Designer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Designer.init({
    loginId: DataTypes.STRING,
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    store: DataTypes.STRING,
    dayOff: DataTypes.STRING,
    workingStartHours: DataTypes.TIME,
    workingEndHours: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'Designer',
  });
  return Designer;
};