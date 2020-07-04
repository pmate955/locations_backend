exports.seed = (knex) => {
  return knex('locations').insert([
    {
      name: 'Töltés',
      geoLocation: '47.20 19.03',
      description: 'Ez jó hely',
      creatorUserId: 1
    },
    {
      name: 'Vasút melletti',
      geoLocation: '47.00 11.05',
      description: 'Néha van vonat',
      creatorUserId: 2
    },
    {
      name: 'Nagyéri mezö',
      geoLocation: '46.20 19.02',
      description: 'Néha van vonat',
      creatorUserId: 1
    }
  ]);
};
