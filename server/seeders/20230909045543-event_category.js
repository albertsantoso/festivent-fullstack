'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('event_categories', [
      {
        name: "Music & Entertainment",
      },
      {
        name: "Arts and Culture",
      },
      {
        name: "Business",
      },
      {
        name: "Education",
      },
      {
        name: "Healthcare",
      },
      {
        name: "Comedy",
      },
      {
        name: "Holiday",
      },
      {
        name: "Technology",
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('event_categories', null, {});
  }
};
