'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        fullname: "aryo",
        email: "aryosetyotama@gmail.com",
        password: "$2b$10$WshmyDV6k2uNeZv8tiIYq.e.Lcwq0kZ9vh6a1BZRNE31fVAqASKXm",
        ref_points: 5000,
      },
      {
        fullname: "christopher",
        email: "purwadhikatestmail@gmail.com",
        password: "$2b$10$Nb0EeRFWnNdjyjVnZRF0QuTG6Pmj.d3ZivL/QUQf3Y.lhi2cMMzYu", //654321
        ref_points: 5000,
      },
      {
        fullname: "Ikrar",
        email: "ikrar27@yahoomail.com",
        password: "$2b$10$WshmyDV6k2uNeZv8tiIYq.e.Lcwq0kZ9vh6a1BZRNE31fVAqASKXm",
        ref_points: 0,
      },
      {
        fullname: "Fadhel",
        email: "fadhel28@gmail.com",
        password: "$2b$10$Nb0EeRFWnNdjyjVnZRF0QuTG6Pmj.d3ZivL/QUQf3Y.lhi2cMMzYu", //654321
        ref_points: 0,
      },
      {
        fullname: "iksan",
        email: "iksan@googlemail.com",
        password: "$2b$10$WshmyDV6k2uNeZv8tiIYq.e.Lcwq0kZ9vh6a1BZRNE31fVAqASKXm",
        ref_points: 0,
      },
      {
        fullname: "Rafael",
        email: "rafael@gmail.com",
        password: "$2b$10$VEmSOjqVgTg59EQaED.lye6N/NqO5dXrxk3174lqboWULfJdLCkTy", //abc1234
        ref_points: 5000,
      },
      {
        fullname: "Rafael",
        email: "rafael2@gmail.com",
        password: "$2b$10$VEmSOjqVgTg59EQaED.lye6N/NqO5dXrxk3174lqboWULfJdLCkTy", //abc1234
        ref_points: 75000,
      },
      {
        fullname: "Albert Santoso",
        email: "albert@gmail.com",
        password: "$2b$10$WshmyDV6k2uNeZv8tiIYq.e.Lcwq0kZ9vh6a1BZRNE31fVAqASKXm",
        ref_points: 0,
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
    */
    await queryInterface.bulkDelete('users', null, {});
  }
};
