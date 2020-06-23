
exports.up = function (knex) {
  return knex.schema.createTable('favorites', (table) => {
    table.increments();
    table.integer('userId').unsigned().references('users.id');
    table.integer('locationId').unsigned().references('locations.id');
    table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    table.timestamp('created_at').defaultTo(knex.raw('CURRENT_TIMESTAMP'));
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('favorites');
};
