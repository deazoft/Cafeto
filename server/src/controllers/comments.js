const { Comment } = require('../db/models');
module.exports = {
    create(req, res) {
        return Comment.create({
            userId: req.body.userId,
            movieId: req.body.movieId,
            comment: req.body.comment
        }).then(result => res.status(201).send(result))
            .error(error => res.status(400).send(error));
    },
    getComment(req, res) {
        return Comment.findAll({ where: { userId: req.body.userId, movieId: req.body.movieId } })
            .then(result => res.status(200).send(result))
            .error(error => res.status(400).send(error));
    }

};
