const db = require('../../data/db-config')

module.exports = {
    find, findById, findStar, add, addStar,
}

function find() {
    db('galaxies')
}

function findById(galaxy_id) {
    db('galaxies as ga')
        .joinLeft('stars as st', 'ga.galaxy_id', '=', 'st.galaxy_id')
        .where('ga.galaxy_id', '=', 'galaxy_id')
        .orderBy('st.star_number', 'asc')
}

function findStar(galaxy_id) {
    db('stars as st')
        .join('galaxies as ga', 'star_id', '=', 'ga.star_id')
        .select('step_id', 'step_number', 'description', 'galaxy_name')
        .orderBy('st.star_number', 'asc')
}

function add(galaxy_id, star) {
    db('stars as st')
        .insert([{star_name: star}, {galaxy_id: galaxy_id}])
}