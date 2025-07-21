# 🌈 API de Linguagem Inclusiva

Uma API desenvolvida em Node.js com foco em tornar textos mais inclusivos, identificando termos de cunho **machista**, **racista**, **capacitista**, entre outros.

## 🚀 Funcionalidades

- Ver todos os termos problemáticos e sugestões.
- Filtrar termos por tipo (machista, racista etc).
- Obter sugestão para um termo específico.
- Analisar um texto e retornar sugestões inclusivas.

## 📌 Rotas

### `GET /termos`
Retorna todos os termos registrados.

### `GET /termos/:tipo`
Filtra termos por tipo (ex: machista, racista, capacitista).

### `GET /sugestoes/:termo`
Retorna a sugestão para o termo informado.

### `POST /analisa`
Analisa o texto enviado e retorna sugestões inclusivas.

**Exemplo de body:**
```json
{
  "texto": "Essa mulherzinha tentou denegrir minha imagem."
}
