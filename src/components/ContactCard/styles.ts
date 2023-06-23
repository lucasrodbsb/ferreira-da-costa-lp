import { COLOR_DARK_BLUE, MOBILE_WIDTH } from './../../config/config';
import { styled } from 'styled-components';

export const Container = styled.div`

    display: flex;
    max-width: 100%;
    justify-content: space-evenly;

`

export const IconContainer = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;    

    & svg {
        width: 70px;
        padding: 20px;
        height: 70px;
        border-radius: 50%;
        background: ${COLOR_DARK_BLUE};
        color: white;
        font-size: 10px;
    }

`

export const TextContainer = styled.div`

    display: flex;
    flex-direction: column;
    gap: 10px;
    width: fit-content;
    font-family: 'Open Sans', sans-serif;
    color: ${COLOR_DARK_BLUE};
    word-wrap: break-word;

`

export const Title = styled.p`

    font-weight: 400;
    font-size: 20px;

`

export const Description = styled.p`

    font-size: 15px;
    width: 300px;

    @media(max-width: 440px){
        width: 250px;
    }

`

