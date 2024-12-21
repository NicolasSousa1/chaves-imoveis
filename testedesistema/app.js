const express = require('express');
const multer = require('multer');
const path = require('path');
const db = require('./database');

const app = express();
const port = 3000;

// Configuração do multer para upload de imagens
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

// Servir arquivos estáticos
app.use(express.static('public'));

// Endpoint para criar anúncios
app.post('/api/anuncios', upload.single('foto'), (req, res) => {
  const { titulo, descricao, preco, localizacao, quartos, banheiros, tamanho } = req.body;
  const foto = req.file ? req.file.filename : null;

  const query = `
    INSERT INTO anuncios (titulo, descricao, preco, localizacao, fotos, quartos, banheiros, tamanho)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.run(
    query,
    [titulo, descricao, preco, localizacao, foto, quartos, banheiros, tamanho],
    function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.redirect('/'); // Redirecionar de volta para o formulário
    }
  );
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
