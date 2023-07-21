import style from './Lista.module.scss'
import Item from './Item'
import { Itarefa } from '../../types/ITarefa'

interface Props {
  tarefas: Itarefa[],
  selecionaTarefa: (tarefaSelecionada: Itarefa) => void
}

const Lista = ({ tarefas, selecionaTarefa }: Props) => {

  return (
    <aside className={style.listaTarefa}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map(item => (
          <Item
            selecionaTarefa={selecionaTarefa}
            key={item.id}
            {...item}
          />
        ))}
      </ul>
    </aside>
  )
}

export default Lista