exports.seed = (knex) => {
  return knex('favorites').insert([
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
  ]);
};
