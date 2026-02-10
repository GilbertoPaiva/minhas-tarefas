import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

type TarefasState = {
  itens: Tarefa[]
}

const initialState: TarefasState = {
  itens: [
    {
      id: 1,
      titulo: 'Estudar JavaScript',
      descricao:
        'Estudar os conceitos básicos de React e criar um projeto simples',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.CONCLUIDA
    },
    {
      id: 2,
      titulo: 'Estudar Redux',
      descricao: 'Aprender a gerenciar estado com Redux e integrar com React',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.PENDENTE
    },
    {
      id: 3,
      titulo: 'Estudar TypeScript',
      descricao:
        'Aprender os conceitos básicos de TypeScript e como integrá-lo com React',
      prioridade: enums.Prioridade.URGENTE,
      status: enums.Status.PENDENTE
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
    }
  }
})

export const { remover, editar } = tarefasSlice.actions

export default tarefasSlice.reducer
