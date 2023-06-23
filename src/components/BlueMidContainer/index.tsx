import React from "react";
import * as C from "./styles";
import { Fade } from "react-awesome-reveal";

interface IBlueMidContainer {
  children?: React.ReactNode;
  title?: string;
  subtitle?: string;
  wrap: string;
}

const BlueMidContainer = ({
  children,
  title,
  wrap,
  subtitle,
}: IBlueMidContainer) => {
  return (
    <C.Container>
      <C.Area>
          <C.Title>{title}</C.Title>
          <C.Subtitle>{subtitle}</C.Subtitle>
          {children}
      </C.Area>
    </C.Container>
  );
};

export default BlueMidContainer;
