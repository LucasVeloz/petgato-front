import styled from 'styled-components';
import reset from '../../assets/forgetimage.jpg';
import { ContainerMax } from '../cadastro/styles';

export const ContainerMaxReset = styled(ContainerMax)`
    background-image: url(${reset});


    .button-submit.forget {
        width: 200px;
    }

    .login.forget {
        margin-top: 50px;
    }
    .login.forget:nth-of-type(2) {
            margin-top: 0px;
    }
    .forgetp {
        color: #707070;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;
