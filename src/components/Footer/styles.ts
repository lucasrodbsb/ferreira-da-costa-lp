import { MOBILE_WIDTH } from './../../config/config';
import { COLOR_ELEVATION, COLOR_DARK_BLUE } from "../../config/config";
import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 90px;
  color: ${COLOR_ELEVATION};
  background-color: ${COLOR_DARK_BLUE};
  font-family: 'Open sans', sans-serif;
  position: absolute;
  bottom: 0;

  & img {
    margin-top: 20px;
    height: 25px;
    width: auto;
    filter: saturate(0);
    transition: .5s ease;

    &:hover{
      filter: saturate(100%);
    }
  }
  
`;

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
  align-items: center;
  justify-content: center;

  @media (max-width: 1081px) {
    width: calc(100% - 30px);
  }
`;

export const FooterText = styled.p`

  font-size: 14px;
  text-align: center;

  @media(max-width: ${MOBILE_WIDTH} ){
    font-size: 12px;
  }

`
