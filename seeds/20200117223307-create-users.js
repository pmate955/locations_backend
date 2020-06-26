exports.seed = (knex) => {
  return knex('users').insert([
    {
      username: 'testUser1',
      email: 'test@email.com',
      passwordHash: 'sha1$0458635c$1$b05a3a5d82c6f899817adb2e4b860756d61fe34d', // teszt
      role: 'user'
    },
    {
      username: 'testUser2',
      email: 'test2@email.com',
      passwordHash: 'sha1$0458635c$1$b05a3a5d82c6f899817adb2e4b860756d61fe34d',
      role: 'user'
    },
    {
      username: 'testAdmin1',
      email: 'test3@email.com',
      passwordHash: 'sha1$0458635c$1$b05a3a5d82c6f899817adb2e4b860756d61fe34d',
      role: 'admin'
    }
  ]);
};
