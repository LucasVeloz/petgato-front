import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 50px;
`;

export const ContainerLeft = styled.div`
    height: 50%;
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
        border-radius: 50%;
        object-fit: cover;
        width: 250px;
        height: 250px;
        margin-bottom: 15px;
    }


`;

export const MiniLink = styled.div`

    span {
        color: var(--dark-pink);
        font-weight: 600;
    }

`;

export const ContainerRight = styled.div`
    max-width: 70%;
    margin-left: 30px;

    h2 {
        color: var(--gray);
        font-weight: 300;
    }
    h1 {
        color: var(--dark-pink);
        font-weight: 600;
        font-size: 40px;
    }

    form {
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        height: 50%;
        width: 660px;


    }

    input {
        height: 50px;
        width: 300px;
        margin-right: 30px;
        border: 1.5px solid var(--middle-pink);
        :nth-of-type(5) {
            margin-right: 300px;
        }
    }

    button {
        height: 50px;
        width: 150px;
    }
`;