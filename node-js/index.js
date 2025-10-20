const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json('HELLO DOCKER!');
});

app.listen(5000);
