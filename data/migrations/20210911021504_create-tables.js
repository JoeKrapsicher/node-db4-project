const { emitKeypressEvents } = require("readline");

exports.up = function(knex) {
  // 1 galaxy has many stars
  return knex.schema.createTable('galaxies', tbl => {
      tbl.increments();
      tbl.string('galaxy_name', 128).notNullable();
      tbl.string('shape', 128)
  })

  .createTable('stars', tbl => {
      tbl.increments();
      tbl.string('star_name', 128);
      tbl.string('Sol_System', 128);
      tbl.string('color', 128);
      //foreign key that points to galaxy table
      tbl.integer('star_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('galaxies');
  })

  .createTable('planets', tbl => {
    tbl.increments();
    tbl.string('planet_name', 128);
    tbl.boolean('life')
    //foreign key that points to star table
    tbl.integer('planet_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('stars')
  })

};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('stars')
    .dropTableIfExists('galaxies');
};
