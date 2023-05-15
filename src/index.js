const express = require('express');
const bodyParser = require('body-parser');
const logger = require('./logger');

const app = express();
app.use(bodyParser.json());

app.get('/ping', (req, res) => {
  logger.info(`${req.method} ${req.url} access at ${new Date().toString()}`);
  res.send('ping pong');
});

app.listen(6000, () => {
  console.log('Listening on 6000');
});
