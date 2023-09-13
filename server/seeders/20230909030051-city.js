'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('cities', [
      {
        name: "Jakarta Pusat",
      },
      {
        name: "Jakarta Barat",
      },
      {
        name: "Jakarta Utara",
      },
      {
        name: "Jakarta Selatan",
      },
      {
        name: "Jakarta Timur",
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('cities', null, {});
  }
};
