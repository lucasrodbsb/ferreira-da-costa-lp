import React from "react";
import Header from "../../components/Header";
import * as C from "./styles";
import Footer from "../../components/Footer";
import PageTitle from "../../components/PageTitle";
import { useNavigate, useParams } from "react-router";
import WppBtn from "../../components/WppBtn";
import { jobAreasData } from "../../mock/jobAreasData";
import DOMPurify from "dompurify";

const DetalhesPage = () => {
  const navigate = useNavigate();
  const id = useParams().id ?? "0";

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

  const currentJobArea = jobAreasData.find((item) => item.id == +id);

  const sanitizedData = () => ({
    __html: DOMPurify.sanitize(currentJobArea?.mainText ?? ""),
  });

  return (
    <>
      <Header links={links} />
      <C.HeaderPlaceholder />
        <C.Container>
          <C.Area>
            <C.Content>
              <PageTitle title={currentJobArea?.title ?? ""} />
              <div>
                <img src={currentJobArea?.urlImage ?? ""} alt="" />
              </div>
              <pre
                className="mainText"
                dangerouslySetInnerHTML={sanitizedData()}
              ></pre>
              <C.BackToHome onClick={() => navigate("/area-atuacao")}>
                Voltar
              </C.BackToHome>
            </C.Content>
          </C.Area>
        </C.Container>
      <WppBtn />
      <C.HeaderPlaceholder />
      <Footer />
    </>
  );
};

export default DetalhesPage;
