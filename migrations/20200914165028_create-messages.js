
exports.up = function (knex) {
  return knex.schema.createTable('messages', (table) => {
    table.increments();
    table.integer('senderId').unsigned().references('users.id');
    table.integer('recipientId').unsigned().references('users.id');
    table.string('contentValue');
    table.enu('contentType', ['text', 'url', 'file']);
    table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    table.timestamp('created_at').defaultTo(knex.raw('CURRENT_TIMESTAMP'));
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('messages');
};
