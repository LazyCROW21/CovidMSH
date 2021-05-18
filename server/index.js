const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json());
app.use(cors());

const api = require('./routes/api');
app.use('/api', api);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(
    "Server Started on port "+port
))