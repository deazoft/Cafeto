var Request = require("request");
const API_KEY = "7f739e607055d08d2816b945741c0a4d";

const tmdb = require('tmdbv3').init(API_KEY);


module.exports = {
    getLast: function(){
        console.log('Prueba');
        tmdb.misc.latest((err ,res) => {
            console.log(res.title);
        });
    }
}



