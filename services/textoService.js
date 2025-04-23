import termos from '../models/bancoMockado.js';

// retorna todos os termos do "banco de dados" mockado
export const getAll = () => termos;

// filtra termos por tipo (por ex: machist, racista, capacitista)
export const getByTipo = (tipo) =>
  termos.filter((t) => t.tipo.toLowerCase() === tipo.toLowerCase());

//retorna sugestao para um termo especifico 
export const getSugestao = (termo) =>
  termos.find((t) => t.termo.toLowerCase() === termo.toLowerCase()) || {};

// analisa um texto e retorna uma lista de termos problematicos encontrados
export const analisaTexto = (texto) =>
  termos.filter((t) =>
    new RegExp(`\\b${t.termo}\\b`, 'gi').test(texto)
  );
