const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database(':memory:');

db.serialize(() => {
  db.run(`
    CREATE TABLE anuncios (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      titulo TEXT NOT NULL,
      descricao TEXT NOT NULL,
      preco REAL NOT NULL,
      localizacao TEXT,
      fotos TEXT,
      quartos INTEGER,
      banheiros INTEGER,
      tamanho REAL,
      data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);
});

module.exports = db;
