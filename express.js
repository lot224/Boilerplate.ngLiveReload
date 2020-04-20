const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');

const lr = require('livereload');
const clr = require('connect-livereload');

const pkg = config = require('./package.json')

lr.createServer().watch('./src');

app.use(clr());
app.use(cors());

app.get('/', (request, response) => {
  const file = path.join(__dirname + pkg.main);
  response.sendFile(file);
});

app.listen(config.port, () => {
  console.log(`Express App Running on http://localhost:${pkg.port}/`);
})