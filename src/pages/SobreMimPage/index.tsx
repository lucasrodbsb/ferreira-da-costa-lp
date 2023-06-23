import React from "react";
import Header from "../../components/Header";
import * as C from "./styles";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router";
import Sobre from "../../components/Sobre";
import WppBtn from "../../components/WppBtn";



const SobreMimPage = () => {

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
      title: "Sobre mim",
      url: "/sobre-mim",
    },
    {
      title: "Contato",
      url: "/contato",
    },
  ];

  return (
    <>
      <Header links={links} />  
      <C.HeaderPlaceholder/>
      <C.Container>
        <C.Area>
          <C.Content>
            <Sobre/>
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

export default SobreMimPage;
