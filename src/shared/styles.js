import styled, {createGlobalStyle} from "styled-components";
import MontserratFont from './fonts/Montserrat-VariableFont_wght.ttf'
import Exo_2Font from './fonts/Exo2-VariableFont_wght.ttf'

export const Container = styled.div`
    width: 100%;
    max-width: 1408px;
`

export const H1 = styled.h1`
    font-family: 'Exo 2', sans-serif;
    font-size: 42px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px; /* 95.238% */
    text-transform: uppercase;
`
export const H2 = styled.h2`
    font-family: "Exo 2", sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px; /* 100% */
    text-transform: uppercase;
`
export const H3 = styled.h3`
    font-family: "Exo 2", sans-serif;
    font-size: 26px;
    font-style: normal;
    font-weight: 700;
    line-height: 33px; /* 126.923% */
    text-transform: uppercase;
`
export const P1 = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: 30px; /* 150% */
`
export const P2 = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 137.5% */
`


export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        //border: 1px pink solid;
    }
    
    body {        
        
    }
    #root {
        width: 100%;
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    @font-face {
        font-family: 'Montserrat';
        src: url(${MontserratFont});
    }
    @font-face {
        font-family: 'Exo 2';
        src: url(${Exo_2Font});
    }
`
