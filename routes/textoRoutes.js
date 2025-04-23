import { Router } from 'express';
import {
  getAllHandler,
  getByTipoHandler,
  getSugestaoHandler,
  analisaTextoHandler
} from '../controllers/textoController.js';

// cria um roteador 
const router = Router();

// define as rotas e controladores responsaveis por cada um
router.get('/termos', getAllHandler);    // lista todos os termos 
router.get('/termos/:tipo', getByTipoHandler);    // lista termos filtrados por tipo 
router.get('/sugestoes/:termo', getSugestaoHandler);   //retorna sugestao para um termo
router.post('/analisa', analisaTextoHandler);   // analisa um termo 

export default router;
