'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Reservations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      date: {
        type: Sequelize.DATEONLY,
      },
      detail: {
        type: Sequelize.STRING,
      },
      '00:00': {
        type: Sequelize.BOOLEAN,
      },
      '00:30': {
        type: Sequelize.BOOLEAN,
      },
      '01:00': {
        type: Sequelize.BOOLEAN,
      },
      '01:30': {
        type: Sequelize.BOOLEAN,
      },
      '02:00': {
        type: Sequelize.BOOLEAN,
      },
      '02:30': {
        type: Sequelize.BOOLEAN,
      },
      '03:00': {
        type: Sequelize.BOOLEAN,
      },
      '03:30': {
        type: Sequelize.BOOLEAN,
      },
      '04:00': {
        type: Sequelize.BOOLEAN,
      },
      '04:30': {
        type: Sequelize.BOOLEAN,
      },
      '05:00': {
        type: Sequelize.BOOLEAN,
      },
      '05:30': {
        type: Sequelize.BOOLEAN,
      },
      '06:00': {
        type: Sequelize.BOOLEAN,
      },
      '06:30': {
        type: Sequelize.BOOLEAN,
      },
      '07:00': {
        type: Sequelize.BOOLEAN,
      },
      '07:30': {
        type: Sequelize.BOOLEAN,
      },
      '08:00': {
        type: Sequelize.BOOLEAN,
      },
      '08:30': {
        type: Sequelize.BOOLEAN,
      },
      '09:00': {
        type: Sequelize.BOOLEAN,
      },
      '09:30': {
        type: Sequelize.BOOLEAN,
      },
      '10:00': {
        type: Sequelize.BOOLEAN,
      },
      '10:30': {
        type: Sequelize.BOOLEAN,
      },
      '11:00': {
        type: Sequelize.BOOLEAN,
      },
      '11:30': {
        type: Sequelize.BOOLEAN,
      },
      '12:00': {
        type: Sequelize.BOOLEAN,
      },
      '12:30': {
        type: Sequelize.BOOLEAN,
      },
      '13:00': {
        type: Sequelize.BOOLEAN,
      },
      '13:30': {
        type: Sequelize.BOOLEAN,
      },
      '14:00': {
        type: Sequelize.BOOLEAN,
      },
      '14:30': {
        type: Sequelize.BOOLEAN,
      },
      '15:00': {
        type: Sequelize.BOOLEAN,
      },
      '15:30': {
        type: Sequelize.BOOLEAN,
      },
      '16:00': {
        type: Sequelize.BOOLEAN,
      },
      '16:30': {
        type: Sequelize.BOOLEAN,
      },
      '17:00': {
        type: Sequelize.BOOLEAN,
      },
      '17:30': {
        type: Sequelize.BOOLEAN,
      },
      '18:00': {
        type: Sequelize.BOOLEAN,
      },
      '18:30': {
        type: Sequelize.BOOLEAN,
      },
      '19:00': {
        type: Sequelize.BOOLEAN,
      },
      '19:30': {
        type: Sequelize.BOOLEAN,
      },
      '20:00': {
        type: Sequelize.BOOLEAN,
      },
      '20:30': {
        type: Sequelize.BOOLEAN,
      },
      '21:00': {
        type: Sequelize.BOOLEAN,
      },
      '21:30': {
        type: Sequelize.BOOLEAN,
      },
      '22:00': {
        type: Sequelize.BOOLEAN,
      },
      '22:30': {
        type: Sequelize.BOOLEAN,
      },
      '23:00': {
        type: Sequelize.BOOLEAN,
      },
      '23:30': {
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Reservations');
  },
};
