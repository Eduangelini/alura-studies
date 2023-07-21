import React, { useState } from 'react'
import Button from '../Button'
import style from './Formulario.module.scss'
import { Itarefa } from '../../types/ITarefa'
import { v4 as uuidv4 } from 'uuid'

interface FormularioProps {
  setTarefas: React.Dispatch<React.SetStateAction<Itarefa[]>>
}

const Formulario = ({ setTarefas }: FormularioProps) => {

  const [time, setTime] = useState('00:00:00')
  const [tarefa, setTarefa] = useState('')

  const adicionarTarefa = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    setTarefas(tarefasAntigas =>
      [
        ...tarefasAntigas,
        {
          tarefa,
          tempo: time,
          selecionado: false,
          completado: false,
          id: uuidv4()
        }
      ]
    )
    setTarefa('')
    setTime('00:00:00')
  }

  return (
    <form
      action=""
      className={style.novaTarefa}
      onSubmit={adicionarTarefa}
    >
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">
          Adicione um novo estudo
        </label>
        <input
          type="text"
          name="tarefa"
          value={tarefa}
          onChange={evento => setTarefa(evento.target.value)}
          id="tarefa"
          placeholder='O que você quer estudar?'
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo">
          Tempo
        </label>
        <input
          type="time"
          step="1"
          name="tempo"
          value={time}
          onChange={evento => setTime(evento.target.value)}
          id="tempo"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Button type="submit">
        Adicionar
      </Button>
    </form>
  )
}

export default Formulario