import express from 'express';
import textoRoutes from './routes/textoRoutes.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/', textoRoutes);

app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`);
});
