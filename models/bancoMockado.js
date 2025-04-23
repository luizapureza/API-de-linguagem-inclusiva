// Lista de termos considerados problemáticos, com sugestões e tipo de preconceito
const termos = [
  {
    termo: "denegrir", // termo racista 
    sugestao: "prejudicar, manchar",
    tipo: "racista"
  },
  {
    termo: "aleijado", // termo capacitista
    sugestao: "pessoa com deficiência",
    tipo: "capacitista"
  },
  {
    termo: "mulherzinha", // termo machista
    sugestao: "fraca, sem força",
    tipo: "machista"
  },
  // --- novos termos adicionados abaixo ---
  {
    termo: "viado",
    sugestao: "homem gay (utilizar com respeito)",
    tipo: "LGBTfóbico"
  },
  {
    termo: "cretino",
    sugestao: "indelicado, sem educação",
    tipo: "ofensivo"
  },
  {
    termo: "mulata",
    sugestao: "mulher negra ou parda",
    tipo: "racista"
  },
  {
    termo: "escravizado",
    sugestao: "pessoa submetida à escravidão (evite 'escravo')",
    tipo: "racista"
  },
  {
    termo: "gordo",
    sugestao: "pessoa com sobrepeso (contexto importa)",
    tipo: "gordofóbico"
  },
  {
    termo: "traveco",
    sugestao: "mulher trans, travesti",
    tipo: "LGBTfóbico"
  },
  {
    termo: "índio",
    sugestao: "pessoa indígena, povo originário",
    tipo: "racista"
  },
  {
    termo: "mongoloide",
    sugestao: "pessoa com síndrome de Down",
    tipo: "capacitista"
  },
  {
    termo: "retardado",
    sugestao: "pessoa com deficiência intelectual",
    tipo: "capacitista"
  },
  {
    termo: "manicômio",
    sugestao: "hospital psiquiátrico, CAPS",
    tipo: "capacitista"
  },
  {
    termo: "daltônico",
    sugestao: "pessoa com daltonismo",
    tipo: "neutro (evite usar pejorativamente)"
  },
  {
    termo: "serviço de mulher",
    sugestao: "trabalho doméstico",
    tipo: "machista"
  },
  {
    termo: "fazer nas coxas",
    sugestao: "feito de forma descuidada",
    tipo: "racista"
  },
  {
    termo: "demente",
    sugestao: "pessoa com demência",
    tipo: "capacitista"
  },
  {
    termo: "cor de pele",
    sugestao: "cor bege, parda, marrom claro etc.",
    tipo: "racista"
  },
  {
    termo: "negro de alma branca",
    sugestao: "inadequado; reforça estereótipos racistas",
    tipo: "racista"
  },
  {
    termo: "cego",
    sugestao: "pessoa com deficiência visual",
    tipo: "capacitista"
  },
  {
    termo: "surdo-mudo",
    sugestao: "pessoa surda",
    tipo: "capacitista"
  }
];

  // exporta os termos para que possam ser usados por outros modulos 
  export default termos;
  