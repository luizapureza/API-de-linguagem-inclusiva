import {
    getAll,
    getByTipo,
    getSugestao,
    analisaTexto
  } from '../services/textoService.js';
  
  export const getAllHandler = (req, res) => {
    res.json(getAll());
  };
  
  export const getByTipoHandler = (req, res) => {
    const tipo = req.params.tipo;
    res.json(getByTipo(tipo));
  };
  
  export const getSugestaoHandler = (req, res) => {
    const termo = req.params.termo;
    res.json(getSugestao(termo));
  };
  
  export const analisaTextoHandler = (req, res) => {
    const { texto } = req.body;
    if (!texto) return res.status(400).json({ erro: 'Texto é obrigatório.' });
    res.json({ sugestoes: analisaTexto(texto) });
  };
  