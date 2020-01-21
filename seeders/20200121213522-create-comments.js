'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => new Promise(async (resolve, reject) => {
    try {
      await queryInterface.bulkInsert('Comments', [
        {
          userId: 1,
          locationId: 1,
          rating: 5,
          commentMessage: 'Cool place'
        },
        {
          userId: 1,
          locationId: 2,
          rating: 3,
          commentMessage: 'Not bad place'
        },
        {
          userId: 2,
          locationId: 1,
          rating: 5,
          commentMessage: 'Egész jó place'
        }
      ], {});
      resolve();
    } catch (error) {
      reject(error);
    }
  })
};
