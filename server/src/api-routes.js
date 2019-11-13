let router = require('express').Router();
const User = require('./controllers').User;

/*const {User} = require('./db/models');

router.post('/user', async function(request, response){
  User.create({
    name:request.body.name,
    email:request.body.email
  }).then(function (User) {
    if (User) {
        response.send(User);
    } else {
        response.status(400).send('Error creando el usuario');
    }
  });
});*/

router.post('/user',User.create);
router.get('/user',User.getall);

module.exports = router;

