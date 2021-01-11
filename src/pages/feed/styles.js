import styled from 'styled-components';

export const Page = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;


    .container {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-family: 'Montserrat', sans-serif;
        padding-top: 30px;
    }
    .geral {
        width: 20%;
        height: auto; 
        margin: 20px;
        border-right-style: solid;
        border-color: rgba(200, 200, 200, 1);
        border-width: 0.1px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .pesquisa{
        width: 80%;
        height: 50px;
        border-radius: 5px;
        border: #BA66A3 solid 2px;
        
    }
    .caixa-autora{
        margin-top: 60px;
        max-width: 80%;
        height: 450px;
        background-color:#FBE9F6;
        margin-bottom: 40px;
        font-family: 'Montserrat', sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .autora{
        display: flex;
        flex-direction: column;
        text-align: center;
    }
    .caixa-autora img{
        object-fit: cover;
        border-radius: 50%;
        height: 150px;
        width: 150px;
        transform: translate(0px,-40px);
        margin: 0;
    }
    .icons {
        align-self: center;
        width: 60%;
        height: auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 10px;
    }
    .icon {
        color: #BA66A3;
        width: 1em;
        border: white solid 7px;
        border-radius: 10px;
    }
    .p1{
        color:#444143;
        margin: 0;
    }
    .p2{
        color: #BA66A3;
        font-size: 25px;
        margin: 0;
    }
    .caixa-autora span{
        color: #707070;
        margin-top: 5%;
        margin-left: 10px;
        font-size: large;
        width:90%;

    }
    .p3{

        font-size: 2em;
        max-width:300px;
        margin-left:1%;
        color:#707070;
    }
    .post div{
        width: 300px;
        height:200px;
        margin-bottom:3%;
        border-bottom-style: solid;
        border-width:1px;
        border-color: rgba(200, 200, 200, 1);
        cursor: pointer;
    }
    .ultimopost{
        width: 300px;
        height:200px;
        cursor: pointer;
    }
    .final{
        width:150px;
        height:50px;
        color:#444143;
        font-family: 'Montserrat', sans-serif;
        border: #C882B4 solid 2.5px;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
    }
    .final:hover{
        background-color: #BA66A3;
        color:#FBE9F6
    }

    .auth {
        width: 20%;
    }
    .posts {
        width: auto;
    }
    .posts h2 {
        width: auto;
        margin-left: 50px;
        color: #C882B4;
        font-size: 2em;
        font-weight: 600;
    }
    .posts p {
        width: auto;
        margin-left: 50px;
        color: #707070;
        font-size: 1.5em;
        margin-bottom: 80px;
    }
    .posts ul {
        padding: 0;
        margin: 0;
        width: auto;
        margin-left: 90px;
    }
    .posts li {
        width: 100%;
        list-style: none;
        margin-bottom: 50px;
        overflow: hidden;
    }
    .publica {
        display: flex;
    }
    .publica img {
        width: 380px;
        height: 400px;
        object-fit: cover;
    }
    .colContainer {
        padding-left: 30px;
        width: auto;
    }
    .colContainer h1 {
        width: 80%;
        margin-left: 0px;
        color: #BA66A3;
    }
    .colContainer p {
        width: 80%;
        margin-left: 0px;
        color: #707070;
    }
    .row {
        width: 30%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .buttonleia {
        display: flex;
        width: 150px;
        height: 50px;
        justify-content: center;
        align-items: center;
        color: #707070;
        text-decoration: none;
        border: 2px solid #BA66A3;
        border-radius: 7px;
    }
    .buttonleia:hover {
        background-color: #FBE9F6;
    }
    .heart {
        color: #707070;
        cursor: pointer;
    }
    .heart:active {
        background-color: #C882B4;
    }
    .buttonPreview {
        display: flex;
        width: 300px;
        height: 50px;
        border: 2px solid #BA66A3;
        border-radius: 7px;
        justify-content: center;
        align-items: center;
        color: #707070;
        text-decoration: none;
        margin-left: 90px;
        margin-bottom: 50px;
    }
    .buttonPreview:hover {
        background-color: #FBE9F6;
    }
`;

export const Tags = styled.div`
    display: flex;
    font-family: 'Montserrat', sans-serif;
    h4 {
        font-weight: 400;
        color: #707070;
        margin-right: 5px;
    }
    .tag {
        color: #BA66A3;
        width: auto;
        background-color: #FBE9F6;
    }
`;