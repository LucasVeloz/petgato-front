import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');

    * {
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;    
        box-sizing: border-box;
    }
    
    html, body, #root {
        max-width: 100vw;
        max-height: 100vh;
        
    }

    :root {
        --dark-gray: #444143;
        --gray: #707070;
        --pink: #FBE9F6;
        --dark-pink: #BA66A3;
        --middle-pink: #C882B4;

    }

`;