'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => new Promise(async (resolve, reject) => {
    try {
      await queryInterface.bulkInsert('Favorites', [
        {
          userId: 1,
          locationId: 1
        },
        {
          userId: 1,
          locationId: 3
        },
        {
          userId: 2,
          locationId: 1
        }
      ], {});
      resolve();
    } catch (error) {
      reject(error);
    }
  })
};
