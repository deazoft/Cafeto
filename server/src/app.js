var express = require('express');


var app = express();
let apiRoutes = require("./routes/user-routes");
let movieRoutes = require('./routes/movie-routes');
let reviewRoutes = require('./routes/review-routes');
let commentRoutes = require('./routes/comments-routes');
const models = require('./db/models');

app.use(express.json());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use('/api', apiRoutes);
app.use('/movie', movieRoutes);
app.use('/review',reviewRoutes);
app.use('/comment',commentRoutes);





models.sequelize.sync()
    .then(result => console.log(result))
    .catch(err => console.log('error',err));



app.listen(3001, function () {
  console.log('Server Arriba');
});