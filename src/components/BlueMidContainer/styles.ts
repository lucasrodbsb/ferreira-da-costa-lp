import {
  COLOR_ELEVATION,
  MOBILE_WIDTH,
} from "../../config/config";
import styled from "styled-components";
import bg from "../../images/background.png";

interface IArea {
  flexDirection?: string;
  bgcolor?: string;
  mgBottom?: string;
}

export const Area = styled.div<IArea>`
  display: flex;
  flex-direction: column;
  max-width: 1080px;
  margin: 0 auto;
  margin-bottom: ${(props) => props.mgBottom};
  height: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
  color: ${COLOR_ELEVATION};
  padding: 50px 0;

  @media (max-width: 1081px) {
    width: calc(100% - 30px);
  }
`;

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  background-color: rgba(25, 45, 65, 1);
  background-blend-mode: multiply;
  background-image: url(${bg});
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;

    @media(max-width: ${MOBILE_WIDTH}){
    text-align: center;
  }
`;

export const Title = styled.p`
  position: relative;
  transition: 1s ease;
  color: white;
  font-size: 40px;
  font-family: "Playfair Display", serif;
  color: ${COLOR_ELEVATION};
  margin-bottom: 20px;
`;

export const Subtitle = styled.p`
  font-family: "Open Sans", sans-serif;
  font-weight: 200;
  font-size: 20px;

  @media (max-width: ${MOBILE_WIDTH}) {
    font-size: 18px;
  }
`;



interface IContent {
  wrap: string;
}

export const Content = styled.div<IContent>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  gap: 20px;

  @media (max-width: ${MOBILE_WIDTH}) {
    flex-wrap: ${(p) => p.wrap};

    & p {
      width: 100%;
    }
    & div {
      width: 100%;
    }
  }
`;
