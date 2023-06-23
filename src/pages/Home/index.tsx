import React from "react";
import Contato from "../../components/Contato";
import Header from "../../components/Header";
import HomeText from "../../components/HomeText";
import Sobre from "../../components/Sobre";
import * as C from "./styles";
import EntreEmContato from "../../components/EntreEmContato";
import AreasAtuacao from "../../components/AreasAtuacao";
import Footer from "../../components/Footer";

import Clientes from "../../components/Clientes";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper";
import { Fade } from "react-awesome-reveal";
import WppBtn from "../../components/WppBtn";

const Home = () => {
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

  interface IImageSlide {
    url: string;
    title: string;
    body: string;
  }

  const imageSlide: IImageSlide[] = [
    {
      url: `../../../../cobrancaJudiciais.png`,
      body: "Soluções para",
      title: "Cobrança Judicial",
    },
    {
      url: `../../../../imob.png`,
      body: "Soluções",
      title: "Jurídicas Imobiliárias",
    },
    {
      url: `../../../../tech.png`,
      body: "Soluções em",
      title: "Licitações",
    },
    {
      url: `../../../../worker.png`,
      body: "Soluções",
      title: "Trabalhistas",
    },
    {
      url: `../../../../background.png`,
      body: "Entre em",
      title: "Contato!",
    },
  ];

  const slideContent = imageSlide.map((item, index) => (
    <SwiperSlide>
     
      <C.Container backgroundImg={item.url}>
        
        <C.Area>
          <C.LogoContainer />
          <HomeText title={item.title} subtitle={item.body} />
        </C.Area>
        
      </C.Container>

    </SwiperSlide>
  ));

  return (
    <>
      <Header links={links} />
      <C.HeaderPlaceholder />
      <C.Container>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
          effect={"fade"}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay, EffectFade]}
        >
          {slideContent}
        </Swiper>
      </C.Container>
      <Sobre />
      <EntreEmContato />
      <AreasAtuacao />
      <Clientes />
      <Contato />
      <WppBtn />
      <C.HeaderPlaceholder />
      <Footer />
    </>
  );
};

export default Home;
