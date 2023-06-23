import React from "react";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";

interface IJobAreasCard {
  icon: React.ReactNode;
  title: string;
  idItem: number
}

const JobAreasCard = ({ icon, title, idItem }: IJobAreasCard) => {

  const navigate = useNavigate()
  return (
    <C.CardContainer onClick={()=> navigate(`/area-atuacao/detalhes/${idItem}`, {replace: true})}>
        <C.IconContainer>{icon}</C.IconContainer>
        <C.Title>{title}</C.Title>
    </C.CardContainer>
  );
};

export default JobAreasCard;
