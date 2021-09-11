const express = require('express');
const { get } = require('lodash');
const Galaxies = require('./galaxy-model.js')

const router = express.Router();

// [GET] /api/galaxies

router.get('/', (req, res, next) => {
    Galaxies.find()
        .then(galaxies => {
            res.json(galaxies)
        })
        .catch(next);
})

router.get('/:galaxy_id', (req, res, next) => {
    const { galaxy_id } = req.params

    Galaxies.findById(galaxy_id)
        .then(galaxy => {
            res.json(galaxy)
        })
        .catch(next)
})

router.get('/:galaxy_id/stars', (req, res, next) => {
    const { galaxy_id } = req.params

    Galaxies.findStar(galaxy_id)
        .then(star => {
            res.status(star)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    const galaxy = req.body

    Galaxies.add(galaxy)
        .then( galaxy => {
            res.status(201).json(galaxy)
        })
        .catch(next);
})

router.post('/', (req, res, next) => {
    const star = req.body
    const { galaxy_id } = req.params

    Galaxies.addStar(galaxy_id, star)
        .then(allStars => {
            res.status(201).json(allStars);
        })
        .catch(next)
})