let router = require('express').Router();
const User = require('../controllers').User;

router.post('/user', User.create);
router.get('/user', User.getall);
router.post('/userByEmail', User.findbyEmail);
router.get('/userByEmail', User.findbyEmail);

module.exports = router;


