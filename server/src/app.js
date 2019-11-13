var express = require('express');


var app = express();
let apiRoutes = require("./routes/user-routes");
let movieRoutes = require('./routes/movie-routes');
let reviewRoutes = require('./routes/review-routes');
const models = require('./db/models');

app.use(express.json());
app.use('/api', apiRoutes);
app.use('/movie', movieRoutes);
app.use('/review',reviewRoutes);



models.sequelize.sync()
    .then(result => console.log(result))
    .catch(err => console.log('error',err));



app.listen(3000, function () {
  console.log('Server Arriba');
});