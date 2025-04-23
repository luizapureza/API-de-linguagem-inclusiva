import termos from '../models/bancoMockado.js';

export const getAll = () => termos;

export const getByTipo = (tipo) =>
  termos.filter((t) => t.tipo.toLowerCase() === tipo.toLowerCase());

export const getSugestao = (termo) =>
  termos.find((t) => t.termo.toLowerCase() === termo.toLowerCase()) || {};

export const analisaTexto = (texto) =>
  termos.filter((t) =>
    new RegExp(`\\b${t.termo}\\b`, 'gi').test(texto)
  );
