const express = require('express');
const app = express();
const PORT = 3000;

// Middleware buat parsing JSON
app.use(express.json());

// Route dasar
app.get('/', (req, res) => {
  res.send('Halo dunia, ini Express!');
});

// Contoh POST
app.post('/user', (req, res) => {
  const { nama, umur } = req.body;
  res.json({ pesan: `Data diterima: ${nama}, umur ${umur}` });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server jalan di http://localhost:${PORT}`);
});
