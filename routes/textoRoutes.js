import { Router } from 'express';
import {
  getAllHandler,
  getByTipoHandler,
  getSugestaoHandler,
  analisaTextoHandler
} from '../controllers/textoController.js';

const router = Router();

router.get('/termos', getAllHandler);
router.get('/termos/:tipo', getByTipoHandler);
router.get('/sugestoes/:termo', getSugestaoHandler);
router.post('/analisa', analisaTextoHandler);

export default router;
