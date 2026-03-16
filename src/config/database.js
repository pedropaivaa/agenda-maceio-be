const mysql = require('mysql2');

const pool = mysql.creatPool ({ 
  host: 'localhost', 
  user: 'root', 
  password: 'leonardo',
  database: ''
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error('Erro ao conectar o banco', err.message);
  } else {
    console.log('Bando de dados conectado com sucesso');
    conecction.release();
  }
});

module.exporta = pool.primose();
