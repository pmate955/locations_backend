module.exports = {
  up: async (queryInterface, Sequelize) => new Promise(async (resolve, reject) => {
    try {
      await queryInterface.bulkInsert('Users', [
        {
          username: 'testUser1',
          email: 'test@email.com',
          passwordHash: 'adasdadsad',
          role: 'user'
        },
        {
          username: 'testUser2',
          email: 'test2@email.com',
          passwordHash: 'adasdadsad',
          role: 'user'
        },
        {
          username: 'testAdmin1',
          email: 'test3@email.com',
          passwordHash: 'adasdadsad',
          role: 'admin'
        }
      ], {});
      resolve();
    } catch (error) {
      reject(error);
    }
  })
};
