# eFood — atividade EBAC

Projeto reconstruído do zero para as atividades do curso de Front-End da EBAC.

## Tecnologias

- React
- TypeScript
- Styled Components
- React Router
- Vite
- Fetch API / AJAX

## Funcionalidades implementadas

- layout inspirado no projeto eFood fornecido pela EBAC;
- listagem de restaurantes;
- navegação para a página de cada restaurante;
- consumo assíncrono da API oficial da atividade;
- cardápio preenchido com os dados reais da API;
- modal de detalhes do produto ao clicar em **Comprar**;
- modal com foto, nome, descrição, porção e preço do item;
- fechamento da modal pelo botão, clique fora ou tecla Esc;
- configuração para publicação na Vercel.

## API

`https://api-ebac.vercel.app/api/efood/restaurantes`

## Como executar

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

> O gerenciamento do carrinho com Redux pertence ao módulo seguinte e não foi antecipado nesta etapa.
