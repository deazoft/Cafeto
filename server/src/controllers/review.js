const { Reviews } = require('../db/models');
module.exports = {
    create(req, res) {
        return Reviews.create({
            userId: req.body.userId,
            movieId: req.body.movieId,
            ranking: req.body.rank
        }).then(result => res.status(201).send(result))
            .error(error => res.status(400).send(error));
    },
    getReview(req, res) {
        return Reviews.findAll({ where: { userId: req.body.userId, movieId: req.body.movieId } })
            .then(result => res.status(201).send(result))
            .error(error => res.status(400).send(error));
    },
    udReview(req, res) {

        return Reviews.findOne({ where: { userId: req.body.userId, movieId: req.body.movieId } })
            .then(function (review) {
                
                if (review) {
                    review.update({
                        ranking: req.body.rank
                    })
                    res.status(201).send('Actualización correcta');
                }
                else {
                    res.status(400).send('No se encontró el registro a actualizar');
                }
            }
            )
            .error(error => res.status(400).send(error));



    }

};
