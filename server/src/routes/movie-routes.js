let router = require('express').Router();
const Movie = require('../controllers').Movie;

router.get('/get',Movie.getMovies);

module.exports = router;