import React from "react";
import * as C from "./styles";

interface ILogoCard {
  logo: string;
}

const LogoCard = ({ logo }: ILogoCard) => {
  return (
    <>
      <C.LogoContainer logoUrl={logo}></C.LogoContainer>
    </>
  );
};

export default LogoCard;
