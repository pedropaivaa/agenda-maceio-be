const app = require('./app');

const porta = 3000;

app.listen(porta, () => {
  console.log(`servidor rodando em http://localhost:${porta}`);
});
