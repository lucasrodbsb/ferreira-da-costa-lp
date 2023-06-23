import React from 'react'
import { useNavigate } from 'react-router'
import BlueMidContainer from '../BlueMidContainer'
import * as C from './styles'

const EntreEmContato = () => {

  const navigate = useNavigate();

  return (
    <BlueMidContainer wrap='wrap' title='Entre em Contato!' subtitle='Fale com nossos especialistas.'>
        <C.Btn onClick={()=> navigate('/contato')}>Clique Aqui!</C.Btn>
    </BlueMidContainer>
  )
}

export default EntreEmContato