import styled from 'styled-components';

export const Headerdiv = styled.div`
    display: flex;
    height: 150px;
    width: 100%;
    background-color: #ba66a3;
    justify-content: space-between;
    align-items: center;
    font-family: "Montserrat", sans-serif;
    filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.5));

    img {
        margin-left: 50px;
        width: 120px;
    }
    ul {
        display: flex;
        justify-content: space-between;
        width: 35%;
        margin-right: 50px;
    }
    li {
        list-style: none;
        width: auto;
    }
    .Link {
        font-size: 1.75em;
        color: white;
        text-decoration: none;
        cursor: pointer;
        font-weight: 400;
    }
    .Link:hover {
        font-weight: 500;
    }
    .activeLink {
        font-weight: 500;
    }
    @media (max-width: 2080px) {
        ul {
            width: 40%;
        }
    }
    @media (max-width: 1600px) {
        ul {
            width: 55%;
        }
    }
    @media (max-width: 1350px) {
        ul {
            width: 50%;
        }
    }
    @media (max-width: 1000px) {
        ul {
            width: 60%;
        }
    }
    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
    
        ul {
            width: 100%;
            padding: 0;
            margin-top: 20px;
            margin-left: 20px;
            margin-right: 20px;
        }
        .Link {
            font-size: 1.2em;
        }
    }
    @media (max-width: 414px) {
        img {
            width: 100px;
        }
    }
`; 