import { useState, useCallback } from 'react';

import Cadastro from '../../components/cadastro';

import api from '../../services/api';

const CadastroPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const handleSubmit = useCallback(async () => {
        await api.post('/users', {
            name,
            email,
            password,
            passwordConfirmation,
        });
    }, [name, email, password, passwordConfirmation]);

    return (
        <Cadastro handleSubmit={handleSubmit}
                  setName={setName}
                  setEmail={setEmail}
                  setPassword={setPassword}
                  setPasswordConfirmation={setPasswordConfirmation}
        />
    );
}

export default CadastroPage;