'use strict';

const {CourtType} = require("../../enums/CourtType");

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('courts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      type: {
        allowNull: false,
        type: Sequelize.ENUM(CourtType.FOOTBALL, CourtType.TENNIS, CourtType.PADEL, CourtType.BASKETBALL)
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('courts');
  }
};
