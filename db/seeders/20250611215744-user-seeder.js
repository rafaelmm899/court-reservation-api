'use strict';

const bcrypt = require("bcrypt");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [{
        name: 'Admin',
        email: 'admin@example.com',
        password: await bcrypt.hash('admin123', 10),
        created_at: new Date(),
        updated_at: new Date(),
    }])
  },

  async down (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('Users', null, {});
  }
};
