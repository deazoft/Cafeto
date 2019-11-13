let router = require('express').Router();
const Comments = require('../controllers').Comments;

router.post('/create', Comments.create);
router.get('/get',Comments.getComment);
//router.put('/Change',Review.udReview);

module.exports = router;


