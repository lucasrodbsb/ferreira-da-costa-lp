import { COLOR_ELEVATION, COLOR_DARK_BLUE } from '../../config/config';
import { styled } from 'styled-components';

export const Btn = styled.button`

    width: 150px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${COLOR_ELEVATION};
    font-family: "Open Sans", sans-serif;
    color: ${COLOR_DARK_BLUE};
    border: none;
    border-radius: 10px;
    margin-top: 30px;
    font-size: 19px;

`