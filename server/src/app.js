var express = require('express');


var app = express();
let apiRoutes = require("./routes/api-routes");
let movieRoutes = require('./routes/movie-routes');
const models = require('./db/models');

app.use(express.json());
app.use('/api', apiRoutes);
app.use('/movie', movieRoutes);



models.sequelize.sync({force: true})
    .then(result => console.log(result))
    .catch(err => console.log('error',err));
    


app.listen(3000, function () {
  console.log('Server Arriba');
});