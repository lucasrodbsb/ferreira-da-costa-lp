import React from "react";
import Header from "../../components/Header";
import * as C from "./styles";
import Footer from "../../components/Footer";
import PageTitle from "../../components/PageTitle";
import LogoCard from "../../components/LogoCard";
import { useNavigate } from "react-router";
import AreasAtuacao from "../../components/AreasAtuacao";
import WppBtn from "../../components/WppBtn";

const AreaAtuacaoPage = () => {

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

  return (
    <>
      <Header links={links} />  
      <C.HeaderPlaceholder/>
      <C.Container>
        <C.Area>
          <C.Content>
            <PageTitle title="" />
            <AreasAtuacao/>
            <C.BackToHome onClick={()=> navigate('/')}>Voltar para a homepage</C.BackToHome>
          </C.Content>
        </C.Area>
      </C.Container>
      
      <C.HeaderPlaceholder/>
      <WppBtn/>
      <Footer />
    </>
  );
};

export default AreaAtuacaoPage;
