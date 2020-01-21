'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => new Promise(async (resolve, reject) => {
    try {
      await queryInterface.bulkInsert('Locations', [
        {
          name: 'Töltés',
          position: 'N47.20E19.03',
          description: 'Ez jó hely',
          townId: 1
        },
        {
          name: 'Vasút melletti',
          position: 'N47.00E11.05',
          description: 'Néha van vonat',
          townId: 2
        },
        {
          name: 'Nagyéri mezö',
          position: 'N46.20E19.02',
          description: 'Néha van vonat',
          townId: 3
        }
      ], {});
      resolve();
    } catch (error) {
      reject(error);
    }
  })
};
