const API_KEY = "7f739e607055d08d2816b945741c0a4d";
const https = require('https');


module.exports = {
    getLast(req, res) {
        https.get('https://api.themoviedb.org/3/movie/popular?api_key='+ API_KEY +'&language=en-US', (resp) => {

            let data = '';
            resp.on('data', (chunk) => {
              data += chunk;
            });
            resp.on('end', () => {
                return res.status(200).send(JSON.parse(data));
            });

        }).on("error", (err) => {
            return res.status(400).send(err);
        });
    }
};





