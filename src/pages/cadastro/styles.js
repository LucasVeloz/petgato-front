import styled from 'styled-components';
import cadastro from '../../assets/Cadastro.jpg'
export const ContainerMax = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    background-image: url(${cadastro});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    align-items: center;
    justify-content: center;

    img {
        width: 100%;
        height: 100%;
    }

    .half.screen {
        border-radius: 2%;
        height: 90%;
        width: 50%;
        background-color: rgba( 251, 233, 346, 0.85);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .centralizer {
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .centralizer img {
        width: 200px;
        height: auto;
    }
    form {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

    }
    p {
        font-family: 'Montserrat', sans-serif;
        color: #C882B4;
        width: 90%;
    }

    input {
        height: 45px;
        width: 90%;
        border-color: #C882B4;
        border-width: 2px;
        outline: 0;
        display: flex;
        justify-content: center;
        border-radius: 10px;
    }
    .button-submit {
        margin: 0;
        border: 0;
        padding: 0;
        margin-top: 30px;
        height: 50px;
        width: 150px;
        background-color: #C882B4;
        border-radius: 5px;
        color: #ffffff;
        font-size: 1rem;
        font-family: 'Montserrat', sans-serif;
        cursor: pointer;
    }
    .textLogin {
        color: #707070;
        width: auto;
        margin-right: 5px;
    }
    .login {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .Link {
        text-decoration: none;
        color: inherit;
        color: #BA66A3;
        font-weight: 500;
        
    }

    @media( max-width: 1024px ) {

        .half.screen {
            height: 100%;
            width: 100%;
        }
    }
    @media( max-width: 374px ) {
        
        .centralizer img {
            width: 0;
            height: 0;

        }
    }

    @media ( max-height: 758px ) {
        .centralizer img {
            width: 150px;
            height: 150px;
        }
        
    }
    @media ( max-height: 590px) {
        .half.screen {
            height: 100%;
            width: 100%;
        }
    }
`;