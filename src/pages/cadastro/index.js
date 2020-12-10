import { useState, useCallback } from 'react';

import Cadastro from '../../components/cadastro';

import api from '../../services/api';

const CadastroPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = useCallback(async () => {
        await api.post('/users', {
            name,
            email,
        });
    }, [name, email]);

    return (
        <Cadastro handleSubmit={handleSubmit} setName={setName} setEmail={setEmail}/>
    );
}

export default CadastroPage;