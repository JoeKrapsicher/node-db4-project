
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('galaxies').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('galaxies').insert([
        { galaxy_name: 'milkyway', shape: 'swirly', star_id: 1},
        { galaxy_name: 'adrenas', shape: "flat"},
        { galaxy_name: 'horizion4', shape: "dotted"}
      ]);
    });
};
