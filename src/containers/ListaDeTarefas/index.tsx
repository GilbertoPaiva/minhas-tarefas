import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

const tarefas = [
  {
    titulo: 'Estutar Typescript',
    prioridade: 'importante',
    status: 'pendente',
    descricao:
      'Estudar os conceitos básicos do Typescript, como tipos, interfaces e classes. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.'
  },
  {
    titulo: 'Pagar contas',
    prioridade: 'urgente',
    status: 'concluída',
    descricao:
      'Pagar as contas de água, luz e internet antes do vencimento. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.'
  },
  {
    titulo: 'Ir para academia',
    prioridade: 'importante',
    status: 'pendente',
    descricao:
      'Fazer exercícios físicos para manter a saúde em dia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.'
  }
]

const ListaDeTarefas = () => (
  <Container>
    <p>2 tarefas marcadas como: &quot;categoria&quot; e &quot;termo&quot;</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            descricao={t.descricao}
            titulo={t.titulo}
            status={t.status}
            prioridade={t.prioridade}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefas
