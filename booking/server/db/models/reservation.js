'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reservation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Reservation.init(
    {
      date: DataTypes.DATEONLY,
      detail: DataTypes.STRING,
      '00:00': DataTypes.BOOLEAN,
      '00:30': DataTypes.BOOLEAN,
      '01:00': DataTypes.BOOLEAN,
      '01:30': DataTypes.BOOLEAN,
      '02:00': DataTypes.BOOLEAN,
      '02:30': DataTypes.BOOLEAN,
      '03:00': DataTypes.BOOLEAN,
      '03:30': DataTypes.BOOLEAN,
      '04:00': DataTypes.BOOLEAN,
      '04:30': DataTypes.BOOLEAN,
      '05:00': DataTypes.BOOLEAN,
      '05:30': DataTypes.BOOLEAN,
      '06:00': DataTypes.BOOLEAN,
      '06:30': DataTypes.BOOLEAN,
      '07:00': DataTypes.BOOLEAN,
      '07:30': DataTypes.BOOLEAN,
      '08:00': DataTypes.BOOLEAN,
      '08:30': DataTypes.BOOLEAN,
      '09:00': DataTypes.BOOLEAN,
      '09:30': DataTypes.BOOLEAN,
      '10:00': DataTypes.BOOLEAN,
      '10:30': DataTypes.BOOLEAN,
      '11:00': DataTypes.BOOLEAN,
      '11:30': DataTypes.BOOLEAN,
      '12:00': DataTypes.BOOLEAN,
      '12:30': DataTypes.BOOLEAN,
      '13:00': DataTypes.BOOLEAN,
      '13:30': DataTypes.BOOLEAN,
      '14:00': DataTypes.BOOLEAN,
      '14:30': DataTypes.BOOLEAN,
      '15:00': DataTypes.BOOLEAN,
      '15:30': DataTypes.BOOLEAN,
      '16:00': DataTypes.BOOLEAN,
      '16:30': DataTypes.BOOLEAN,
      '17:00': DataTypes.BOOLEAN,
      '17:30': DataTypes.BOOLEAN,
      '18:00': DataTypes.BOOLEAN,
      '18:30': DataTypes.BOOLEAN,
      '19:00': DataTypes.BOOLEAN,
      '19:30': DataTypes.BOOLEAN,
      '20:00': DataTypes.BOOLEAN,
      '20:30': DataTypes.BOOLEAN,
      '21:00': DataTypes.BOOLEAN,
      '21:30': DataTypes.BOOLEAN,
      '22:00': DataTypes.BOOLEAN,
      '22:30': DataTypes.BOOLEAN,
      '23:00': DataTypes.BOOLEAN,
      '23:30': DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Reservation',
    }
  );
  return Reservation;
};
