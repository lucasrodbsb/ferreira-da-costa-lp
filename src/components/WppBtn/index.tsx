import React from 'react'
import * as C from './styles'
import { BsWhatsapp } from 'react-icons/bs'

const WppBtn = () => {
  return (
    <C.WppContainer>
        <a href="https://api.whatsapp.com/send?phone=5561991484701&text=Ol%C3%A1,%20Ferreira%20da%20Costa!">
            <BsWhatsapp/>
        </a>
    </C.WppContainer>
  )
}

export default WppBtn