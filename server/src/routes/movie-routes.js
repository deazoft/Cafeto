let router = require('express').Router();
const Movie = require('../controllers').Movie;

router.post('/get',Movie.getMovies);

module.exports = router;