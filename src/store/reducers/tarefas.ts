import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new Tarefa(
      'Estutar Typescript',
      enums.Prioridade.IMPORTANTE,
      enums.Status.PENDENTE,
      'Estudar os conceitos básicos do Typescript, como tipos, interfaces e classes. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.',
      1
    ),
    new Tarefa(
      'Estutar React',
      enums.Prioridade.URGENTE,
      enums.Status.CONCLUIDA,
      'Estudar os conceitos básicos do React, como componentes, props e estado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.',
      2
    ),
    new Tarefa(
      'Estutar JavaScript',
      enums.Prioridade.URGENTE,
      enums.Status.PENDENTE,
      'Estudar os conceitos básicos do JavaScript, como variáveis, funções e objetos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.',
      3
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      return state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefasSlice.actions

export default tarefasSlice.reducer
