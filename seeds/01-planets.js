
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('planets').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('planets').insert([
        {planet_name: 'Earth', star_id: 1, life: true },
        {planet_name: 'Mars', star_id: 1, life: false},
        {planet_name: 'Jupiter', star_id: 1, life: false}
      ]);
    });
};
