import React from 'react'
import * as C from './styles'

interface IContactCard {
    icon: React.ReactNode,
    title: string,
    descr: string
}

const ContactCard = ({icon, title, descr}: IContactCard) => {
  return (
    <C.Container>
        <C.IconContainer >
            {icon}
        </C.IconContainer>
        <C.TextContainer>
            <C.Title>{title}</C.Title>
            <C.Description>{descr}</C.Description>
        </C.TextContainer>
    </C.Container>
  )
}

export default ContactCard