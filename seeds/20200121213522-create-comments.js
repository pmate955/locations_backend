exports.seed = (knex) => {
  return knex('comments').insert([
    {
      userId: 1,
      locationId: 1,
      rating: 5,
      content: 'Cool place'
    },
    {
      userId: 1,
      locationId: 2,
      rating: 3,
      content: 'Not bad place'
    },
    {
      userId: 2,
      locationId: 1,
      rating: 5,
      content: 'Egész jó place'
    }
  ]);
};
