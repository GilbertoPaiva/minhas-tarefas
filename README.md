# Minhas Tarefas

Aplicativo web para organizar tarefas com cadastro rapido, filtros por status/prioridade e edicao inline. Construido com React, TypeScript, Redux Toolkit e styled-components.

## Funcionalidades

- Cadastro de tarefas com titulo, descricao e prioridade (normal, importante, urgente) em `/novo`.
- Listagem com busca por titulo e filtros por status ou prioridade em `/`.
- Marcar como concluida direto na lista.
- Edicao inline de descricao, com salvar/cancelar.
- Remocao de tarefas.
- Estado em memoria via Redux Toolkit (dados sao reiniciados ao recarregar).

## Stack

- React 18 + TypeScript
- Redux Toolkit + React Redux
- React Router DOM 7
- styled-components
- Create React App

## Como rodar localmente

1. Pre-requisitos: Node 18+ e npm.
2. Instale dependencias:
   ```sh
   npm install
   ```
3. Suba o projeto:
   ```sh
   npm start
   ```
4. Acesse http://localhost:3000

Build para producao:

```sh
npm run build
```

## Estrutura

- `src/pages/Home` – lista e filtros das tarefas.
- `src/pages/Cadastro` – formulario de nova tarefa.
- `src/containers/ListaDeTarefas` – busca/filtros e renderizacao.
- `src/containers/BarraLateral` – campo de busca + filtros.
- `src/containers/Formulario` – cadastro.
- `src/components/Tarefa` – card com marcar, editar e remover.
- `src/store` – Redux Toolkit (tarefas e filtros).
