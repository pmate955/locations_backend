module.exports = {
  up: async (queryInterface, Sequelize) => new Promise(async (resolve, reject) => {
    try {
      await queryInterface.bulkInsert('Towns', [
        {
          name: 'Szeged',
          position: 'N47.20E19.03'
        },
        {
          name: 'Tótkomlós',
          position: 'N47.00E11.03'
        },
        {
          name: 'Nagyér',
          position: 'N46.20E19.03'
        }
      ], {});
      resolve();
    } catch (error) {
      reject(error);
    }
  })
};
