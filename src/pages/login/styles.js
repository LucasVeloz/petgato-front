import styled from 'styled-components';
import login from '../../assets/Login.jpg';
import { ContainerMax } from '../cadastro/styles';

export const ContainerMaxLogin = styled(ContainerMax)`
    background-image: url(${login});

    .Link.forget {
        margin-top: 30px;
    }   
    .button-submit:hover {
        background-color: #BA66A3;
    }
`;
