import express from 'express';
import textoRoutes from './routes/textoRoutes.js';

const app = express();
const PORT = 4000;

// permite que o app interprete requisicoes com json
app.use(express.json());

// define as rotas principais do sistema 
app.use('/', textoRoutes);

// inicia o servidor na porta 3000
app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`);
});
