
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('stars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('stars').insert([
        {star_name: 'Sun', Sol_System: "Sol", color: "yellow"},
        {star_name: 'Beetlegeuse', Sol_System: "Beetlegeuse", color: "red" },
        {star_name: 'Polaris', Sol_System: "Polaris", color: "yellow"}
      ]);
    });
};
