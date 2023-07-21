import style from './Lista.module.scss'
import Item from './Item'
import { Itarefa } from '../../types/ITarefa'

const Lista = ({ tarefas }: { tarefas: Itarefa[] }) => {

  return (
    <aside className={style.listaTarefa}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item
            key={index}
            {...item}
          />
        ))}
      </ul>
    </aside>
  )
}

export default Lista

// onClick={() => {
//   setTarefas([...tarefas, {
//     tarefa: 'Nova tarefa',
//     tempo: '00:00:00'
//   }])
// }}