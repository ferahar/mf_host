const express = require('express');
const path = require('path');
const helmet = require('helmet')

const app = express();
const PORT = process.env.PORT || 5000;
const AG_GRID_KEY = process.env.AG_GRID_KEY || '';

//TODO:
// app.use(helmet.hidePoweredBy())
// app.use(helmet.xssFilter())

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/ag_grid_token', (request, response) => {
  response.send(AG_GRID_KEY);
});

app.get('*', function (request, response) {
  response.sendFile(__dirname + "/dist/index.html");
});



app.listen(PORT, function () {
  global.console.log("Frontend server listens on port: " + PORT);
});
