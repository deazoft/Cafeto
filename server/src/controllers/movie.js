const API_KEY = "7f739e607055d08d2816b945741c0a4d";
var request = require("request");
/*Url Imagenes https://image.tmdb.org/t/p/original/eQRFo1qwRREYwj47Yoe1PisgOle.jpg*/
module.exports = {
    getMovies(req, res) {

        var options = {
            method: 'GET',
            url: 'https://api.themoviedb.org/3/discover/movie',
            qs:
            {
                include_adult: 'false',
                include_video:'false',
                page: req.body.page,
                sort_by:'release_date.asc',
                language: 'en-US',
                primary_release_year: req.body.year,
                api_key: API_KEY,
                with_original_language:req.body.language
            },
            body: '{}'
        };

        request(options, function (error, response, body) {
            if (error) return res.status(400).send(error);
            return res.status(200).send(JSON.parse(body));
        });

    }
};





