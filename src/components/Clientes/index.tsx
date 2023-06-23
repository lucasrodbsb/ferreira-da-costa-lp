import React from "react";
import BlueMidContainer from "../BlueMidContainer";
import { useNavigate } from "react-router";
import * as C from "./styles";

const Clientes = () => {

  const navigate = useNavigate()

  return (
    <BlueMidContainer
      wrap="wrap"
      title="Veja quem confia no nosso trabalho!"
      subtitle="Veja detalhadamente alguns dos nossos parceiros."
    >
      <C.Btn onClick={()=> navigate('/clientes')}>Ver Parceiros</C.Btn>
    </BlueMidContainer>
  );
};

export default Clientes;
