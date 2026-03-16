const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send("A api da agenda maceió deu certo ate aqui");
});

module.exports = app;
