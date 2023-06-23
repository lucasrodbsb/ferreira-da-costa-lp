import React from "react";
import SectionConatiner from "../SectionContainer";
import * as C from "./styles";

const Sobre = () => {
  return (
    <SectionConatiner title="Sobre Nós" mobileWrap="wrap-reverse">
      <C.TextContainer className="mainTxt">
        Após vários anos advogando no contencioso bancário de massa em
        escritórios de advocacia credenciados ao Banco Regional de Brasília
        (BRB), também como consultor de licitações e contratos em empresas do
        segmento de médico hospitalar, produtos de saúde, construção civil e
        artigos tático militares, o advogado Fabrizio Costa resolveu utilizar
        toda a sua experiência profissional e abrir o escritório Ferreira da
        Costa Advocacia, por acreditar que a advocacia não é sobre burocracia ou
        processos judiciais intermináveis que muitas vezes não trazem a solução
        esperada, mas sim para oferecer uma outra alternativa a advocacia
        tradicional, com o objetivo transformar o que muitos enxergam como
        problemas em possibilidades de negócios que podem transformar a vida dos
        clientes oferecendo serviços jurídicos que trazem retorno ao cliente
        transferindo a carga problemática para a nossa equipe que é totalmente
        qualificada, humanizada e preparada para lidar com todos os tipos de
        demanda. A Ferreira da Costa Advocacia possui um escritório Full Service
        conectado com uma nova advocacia, mais simples e dinâmica, em parceria
        com Startups de inteligência artificial que se aproxima do cliente
        através de uma linguagem fácil e de respostas rápidas. Atento às novas
        tecnologias, visa facilitar as trocas de documentos e informações e
        disponibilidade total da nossa equipe para aqueles que tenham pouca
        intimidade com as ferramentas tecnológicas e possam ser bem atendidos.
        Ressaltamos que, os nossos clientes que são o foco principal, nosso
        escritório foi criado pensando em atender sem distinção social, raça ou
        credo.
      </C.TextContainer>
      <C.ImageContainer />
    </SectionConatiner>
  );
};

export default Sobre;
