/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('pengguna',function(table){
    table.string('id').primary()
    table.string('name',100).notNullable()
    table.string('email',100).notNullable()
    table.string('img')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropSchema('pengguna')
};
