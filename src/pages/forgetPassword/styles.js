import styled from 'styled-components';
import forget from '../../assets/forgetimage.jpg';
import { ContainerMax } from '../cadastro/styles';

export const ContainerMaxForget = styled(ContainerMax)`
    background-image: url(${forget});

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