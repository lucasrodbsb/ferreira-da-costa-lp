import { MOBILE_WIDTH } from './../../config/config';
import { styled } from "styled-components";

export const MapMediaLocation = styled.div`
  width: 48%;
  height: 300px;

  & iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }

`;

export const ContactContainer = styled.div`
  width: 48%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;

  @media(max-width: ${MOBILE_WIDTH}){
    width: 100%;
  }
`;
