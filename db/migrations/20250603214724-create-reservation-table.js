'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.createTable('reservations', {
          id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER
          },
          date: {
              allowNull: false,
              type: Sequelize.DATE
          },
          time: {
              allowNull: false,
              type: Sequelize.TIME
          },
          user_id: {
              allowNull: false,
              type: Sequelize.INTEGER,
              references: {
                  model: 'users',
                  key: 'id'
              }
          },
          court_id: {
              allowNull: false,
              type: Sequelize.INTEGER,
              references: {
                  model: 'courts',
                  key: 'id'
              }
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
      await queryInterface.dropTable('reservations');
  }
};
