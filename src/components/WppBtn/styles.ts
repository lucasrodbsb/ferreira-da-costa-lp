import { COLOR_DARK_BLUE, MOBILE_WIDTH } from './../../config/config';
import { styled } from "styled-components";

export const WppContainer = styled.div`
  height: 60px;
  width: 60px;
  background-color: #25d366;
  border-radius: 50%;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 999999;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid #fff 2px;
  transition: 1s ease;
  cursor: pointer;

  -webkit-box-shadow: 11px 10px 23px -12px rgba(0,0,0,0.67);
-moz-box-shadow: 11px 10px 23px -12px rgba(0,0,0,0.67);
box-shadow: 11px 10px 23px -12px rgba(0,0,0,0.67);

&::after{
    transition: 1s ease;
    content: "Fale agora com seu advogado!";
    position: absolute;
    left: -203px;
    border-radius: 10px;
    font-family: 'Open Sans', sans-serif;
    font-size: 13px;
    font-weight: 500;
    padding: 5px;
    /* color: ${COLOR_DARK_BLUE}; */
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    background-color: #25d366;
    border: solid #fff 2px;
  }

  &:hover{
    box-shadow: none;
  }

  & a {
    color: #fff;
    text-decoration: none;
    font-size: 30px;
    padding-top: 5px;
  }

  @media(max-width: ${MOBILE_WIDTH}){
    &::after {
      display: none
    }
  }
`;
