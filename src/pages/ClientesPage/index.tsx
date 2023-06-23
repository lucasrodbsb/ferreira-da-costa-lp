import React from "react";
import Header from "../../components/Header";
import * as C from "./styles";
import Footer from "../../components/Footer";
import LogoImpoBras from "../../images/logos/impoBras.png";
import LogoShalke from "../../images/logos/shalke.png";
import LogoArmada from "../../images/logos/armada.png";
import LogoBMA from "../../images/logos/bma.png";
import LogoCC from "../../images/logos/cc.png";
import LogoCandyShop from "../../images/logos/candyShop.png";
import LogoAbbaPai from "../../images/logos/abbaPai.png";
import LogoRTecnologia from "../../images/logos/rTecnologia.png";
import LogoResgate from "../../images/logos/resgate.png";
import LogoDt from "../../images/logos/meuDotor.png";
import LogoSafo from "../../images/logos/safo.png";
import PageTitle from "../../components/PageTitle";
import LogoCard from "../../components/LogoCard";
import { useNavigate } from "react-router";
import WppBtn from "../../components/WppBtn";


type Logo = {
  url: string;
};

const ClientesPage = () => {

  const navigate = useNavigate();

  const links = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Áreas de atuação",
      url: "/area-atuacao",
    },
    {
      title: "Sobre nós",
      url: "/sobre-mim",
    },
    {
      title: "Contato",
      url: "/contato",
    },
  ];

  const logosData: Logo[] = [
    {
      url: LogoImpoBras,
      
    },
    {
      url: LogoArmada,
      
    },
    {
      url: LogoBMA,
      
    },
    {
      url: LogoCC,
      
    },
    {
      url: LogoCandyShop,
    },
    {
      url: LogoAbbaPai,
      
    },
    {
      url: LogoShalke,
      
    },
    {
      url: LogoRTecnologia,
    },
    {
      url: LogoResgate,
    },
    {
      url: LogoSafo,
    },
    {
      url: LogoDt,
    },
  ];

  const logosContent = logosData.map((item, index) => (
    <LogoCard logo={item.url}/>
  ));

  return (
    <>
      <Header links={links} />  
      <C.HeaderPlaceholder/>
      <C.Container>
        <C.Area>
          <C.Content>
            <PageTitle title="Nossos Parceiros" />
            <C.LogosContainer>{logosContent}</C.LogosContainer>
            <C.BackToHome onClick={()=> navigate('/')}>Voltar para a homepage</C.BackToHome>
          </C.Content>
        </C.Area>
      </C.Container>
      <WppBtn/>
      <C.HeaderPlaceholder/>
      <Footer />
    </>
  );
};

export default ClientesPage;
