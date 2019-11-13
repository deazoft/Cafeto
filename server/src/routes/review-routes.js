let router = require('express').Router();
const Review = require('../controllers').Review;

router.post('/create', Review.create);
router.get('/getReview',Review.getReview);
router.put('/Change',Review.udReview);

module.exports = router;


