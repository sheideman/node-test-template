const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.status(200).send({text:'hello world!'});
});
app.get('/users', (req, res) => {
  res.status(200).send([{name:'Steve',age:41},{name:'Bill',age:31}, {name:'Danielle',age:21}]);
});
app.listen(3000);
module.exports.app = app;
