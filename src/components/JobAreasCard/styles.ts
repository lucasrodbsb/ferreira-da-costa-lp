import { COLOR_DARK_BLUE, MOBILE_WIDTH } from './../../config/config';
import { styled } from 'styled-components';

export const CardContainer = styled.section`

    display: flex;
    width: 150px;
    flex-direction: column;
    cursor: pointer;
    

`

export const IconContainer = styled.section`

    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;

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

export const Title = styled.p`
    font-size: 20px;
    color: ${COLOR_DARK_BLUE};
    text-align: center;
    font-family: 'Open Sans', sans-serif

`