var express = require('express');


var app = express();
let apiRoutes = require("./api-routes");

app.use(express.json());
app.use('/api', apiRoutes);


/*models.sequelize.sync({force: true})
    .then(result => console.log(result))
    .catch(err => console.log('EEEERRRROOOOOOR',err));
*/

app.listen(3000, function () {
  console.log('Server Arriba');
});