import {
    getAll,
    getByTipo,
    getSugestao,
    analisaTexto
  } from '../services/textoService.js';
  
  // controlador que retorna todos os termos 
  export const getAllHandler = (req, res) => {
    res.json(getAll());
  };
  
  // controlador que retorna termos de um tipo especifico 
  export const getByTipoHandler = (req, res) => {
    const tipo = req.params.tipo;
    res.json(getByTipo(tipo));
  };
  
  // controlador que retorna sugestao para um termo especifico 
  export const getSugestaoHandler = (req, res) => {
    const termo = req.params.termo;
    res.json(getSugestao(termo));
  };
  
  // controlador que analisa um texto e retorna sugestoes de inclusao 
  export const analisaTextoHandler = (req, res) => {
    const { texto } = req.body;
    if (!texto) return res.status(400).json({ erro: 'Texto é obrigatório.' });

    // retorna sugestoes baseadas nos termos enconmtrados no texto
    res.json({ sugestoes: analisaTexto(texto) });
  };
  