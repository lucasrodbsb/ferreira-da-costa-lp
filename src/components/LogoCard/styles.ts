import { styled } from 'styled-components';

interface ILogoContainer {
    logoUrl: string,
}

export const LogoContainer = styled.div<ILogoContainer>`

    width: 150px;
    height: 200px;
    background-image: url(${p=> p.logoUrl});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    transition: .5s ease;
    position: relative;

    &:hover{
        transform: translateY(-30px);
    }

`