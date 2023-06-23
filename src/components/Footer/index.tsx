import React from "react";
import * as C from "./styles";
import logoLuminar from '../../images/logoLuminar.png'

const Footer = () => {
  const d = new Date();
  const actualYear = d.getFullYear();
  console.log(actualYear);

  return (
    <C.Container>
      <C.Area>
        <C.FooterText>
          ©{actualYear}. Ferreira da Costa Advocacia. Todos os direitos
          reservados.
        </C.FooterText>
        <img src={logoLuminar} alt="Luminar Software Logo" />
      </C.Area>
    </C.Container>
  );
};

export default Footer;
