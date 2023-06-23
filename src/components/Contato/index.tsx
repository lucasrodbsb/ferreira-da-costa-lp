import React from "react";
import ContactCard from "../ContactCard";
import SectionConatiner from "../SectionContainer";
import { MdLocationPin } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import * as C from "./styles";

const Contato = () => {
  return (
    <SectionConatiner customStyle={{}} title="Contato" mobileWrap="wrap">
      <C.MapMediaLocation>
        <iframe 
          title="AddressMap"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d259.72564918109856!2d-48.05253441059001!3d-15.838734580800073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a335e5e54ce9f%3A0x2702f484cb96d7b0!2sGeometrica%20Engenharia%20Ambiental!5e0!3m2!1spt-BR!2sbr!4v1687387888996!5m2!1spt-BR!2sbr"
        ></iframe>
      </C.MapMediaLocation>
      <C.ContactContainer>
        <ContactCard
          title="Endereço:"
          descr="QSA 11, LT 15/16 Centro Empresarial Rosa Maria - Sala 503 - Taguatinga Sul - DF"
          icon={<MdLocationPin />}
        />
        <ContactCard
          title="Telefone:"
          descr="(61) 99148-4701 (WhatsApp)"
          icon={<FaPhoneAlt />}
        />
        <ContactCard
          title="Gmail:"
          descr="ferreiradacosta.adv@gmail.com"
          icon={<IoMdMail />}
        />
      </C.ContactContainer>
    </SectionConatiner>
  );
};

export default Contato;
