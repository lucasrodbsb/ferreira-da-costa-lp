import React from "react";
import { jobAreasData } from "../../mock/jobAreasData";
import JobAreasCard from "../JobAreasCard";
import SectionConatiner from "../SectionContainer";
import * as C from "./styles";

const AreasAtuacao = () => {

  const jobAreasContent = jobAreasData.map((item, index) => (
    <JobAreasCard idItem={item.id} icon={item.icon} title={item.title} />
  ));

  return (
    <>
      <SectionConatiner
        customStyle={{
          justifyContent: "center",
          display: "flex",
        }}
        mobileWrap=""
        title="Áreas de Atuação"
        wrap="wrap"
      >
        {jobAreasContent}
      </SectionConatiner>
    </>
  );
};

export default AreasAtuacao;
