import React from 'react'
import style from '../Lista.module.scss'
import { Itarefa } from '../../../types/ITarefa'

const Item = ({ tarefa, tempo, selecionado, completado, id }: Itarefa) => {
  return (
    <li className={style.item}>
      <h3>
        {tarefa}
      </h3>
      <span>
        {tempo}
      </span>
    </li>
  )
}

export default Item