let router = require('express').Router();
const Movie = require('./controllers').Movie;

router.get('/last',Movie.getLast);

module.exports = router;