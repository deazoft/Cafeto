const { User } = require('../db/models');
module.exports = {
    create(req, res) {
        return User.create({
            name: req.body.name,
            email: req.body.email
        }).then(User => res.status(201).send(User))
            .error(error => res.status(400).send(error));
    },
    getall(req, res) {
        return User.findAll().then(User => res.status(201).send(User))
            .error(error => res.status(400).send(error));
    }
};
