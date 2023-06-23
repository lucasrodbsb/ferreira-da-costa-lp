import { COLOR_DARK_BLUE, MOBILE_WIDTH } from './../../config/config';
import { styled } from 'styled-components';
import foto from '../../images/fotoFabrizio.png'

export const TextContainer = styled.p`

    color: ${COLOR_DARK_BLUE};
    width: 50%;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: 18px;
    text-align:justify ;

    @media(max-width: ${MOBILE_WIDTH}){
        font-size: 18px;
    }

`

export const ImageContainer = styled.div`

    width: 50%;
    height: 500px;
    background-image: url(${foto});
    background-position: top;
    background-size: cover;
    position: relative;

    @media(max-width: ${MOBILE_WIDTH}){
        height: 300px;
        background-position: center;
    }

    & img {
        height: 300px;
        
    }

    &::after {

        content: "";
        position: absolute;
        background-color: transparent;
        border-right: solid 2px #000;
        border-top: solid 2px #000;
        height: 100%;
        width: 50%;
        right: -10px;
        top: -10px;

    }

`

export const SobreWrapper = styled.div`

    display: flex;
    background: blue;
    width: 100%;
    height: 100%;

`