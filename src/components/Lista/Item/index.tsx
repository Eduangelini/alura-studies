import React from 'react'
import style from '../../Lista/Item/Item.module.scss'
import { Itarefa } from '../../../types/ITarefa'

interface Props extends Itarefa {
  selecionaTarefa: (tarefaSelecionada: Itarefa) => void
}

const Item = (
  {
    tarefa,
    tempo,
    selecionado,
    completado,
    id,
    selecionaTarefa
  }: Props) => {
  return (
    <>
      <li
        className={`${style.item} ${selecionado ? style.itemSelecionado : ''} ${completado ? style.itemCompletado : ''}`}
        onClick={() => !completado && selecionaTarefa(
          {
            tarefa,
            tempo,
            selecionado,
            completado,
            id
          }
        )}
      >
        <h3>
          {tarefa}
        </h3>
        <span>
          {tempo}
        </span>
        {completado && <span className={style.concluido} aria-label='tarefa completada'></span>}
      </li >
    </>
  )
}

export default Item