let router = require('express').Router();
const Comments = require('../controllers').Comments;

router.post('/create', Comments.create);
router.post('/get',Comments.getComment);

module.exports = router;


