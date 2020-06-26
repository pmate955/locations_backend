exports.seed = (knex) => {
  return knex('locations').insert([
    {
      name: 'Töltés',
      geoLocation: 'N47.20E19.03',
      description: 'Ez jó hely',
      creatorUserId: 1
    },
    {
      name: 'Vasút melletti',
      geoLocation: 'N47.00E11.05',
      description: 'Néha van vonat',
      creatorUserId: 2
    },
    {
      name: 'Nagyéri mezö',
      geoLocation: 'N46.20E19.02',
      description: 'Néha van vonat',
      creatorUserId: 1
    }
  ]);
};
