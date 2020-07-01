exports.seed = (knex) => {
  return knex('users').insert([
    {
      username: 'testUser1',
      email: 'test@email.com',
      passwordHash: '$2b$10$UWA0Wle.Aw5MxH.hdScEguzn.ceJXHY2QSpyLF66ZSGXIGn.qsT8G', // asd123
      role: 'user'
    },
    {
      username: 'testUser2',
      email: 'test2@email.com',
      passwordHash: '$2b$10$UWA0Wle.Aw5MxH.hdScEguzn.ceJXHY2QSpyLF66ZSGXIGn.qsT8G',
      role: 'user'
    },
    {
      username: 'testAdmin1',
      email: 'test3@email.com',
      passwordHash: '$2b$10$UWA0Wle.Aw5MxH.hdScEguzn.ceJXHY2QSpyLF66ZSGXIGn.qsT8G',
      role: 'admin'
    }
  ]);
};
